import express from "express";
import { Server } from "socket.io";
import { ChatEvent, MAX_ATTEMPTS, TRY_TIME } from "./constants";
import { ChatMessage } from "./types";
import { createServer } from "http";
import channeldb from "./db/db";
import spamdb from "./db/spam-db";
import requestLog from "./db/request-log";
var cors = require("cors");

export class ChatServer {
  public static readonly PORT: number = 8080;
  private _app: express.Application;
  private server: any;
  private io: any;
  private port: string | number;

  constructor() {
    this._app = express();
    this.port = process.env.PORT || ChatServer.PORT;
    this._app.use(cors());
    this._app.options("*", cors());
    this.server = createServer(this._app);
    this.initSocket();
    this.listen();
  }
  private isSpam(input: string): boolean {
    return input.split(" ").some((w) => spamdb.includes(w));
  }
  private initSocket(): void {
    this.io = new Server(this.server);
  }
  private rateLimitationProtection(ip: any): boolean {
    var date = new Date();
    requestLog.push({ ip, date });
    var userLog = requestLog.filter((r) => r.ip === ip);
    var request_times = 0;
    userLog.map((r) => {
      //check if have more request from same ip in the specified period of time
      if ((date.getTime() - TRY_TIME) < r.date.getTime()) {
        request_times++;
      }
    });
    if (request_times > MAX_ATTEMPTS) {
      return false;
    }
    return true;
  }
  private listen(): void {
    this.server.listen(this.port, () => {
      console.log("Running server on port %s", this.port);
    });

    this.io.on(ChatEvent.CONNECT, (socket: any) => {
      console.log("Connected client on port %s.", this.port);
      var address = socket.handshake.address;
      var result = this.rateLimitationProtection(address);
      if (!result) {
        socket.emit(
          ChatEvent.MORE_ATTEMPT,
          `You request more than expected. Please try ${TRY_TIME /60000} minutes later!`
        );
        return;
      }
      socket.on(ChatEvent.MESSAGE, (m: ChatMessage) => {
        console.log("[server](message): %s", JSON.stringify(m));
        if (this.isSpam(m.text)) {
          socket.emit(
            ChatEvent.MESSAGES,
            channeldb.filter((ch) => ch.name === m.channel)[0]
          );
          socket.emit(ChatEvent.SPAM, "you should not use spam worlds");
          return;
        }
        channeldb.filter((ch) => ch.name === m.channel)[0]
          ?.messages.push({
            date: new Date().toLocaleString(),
            text: m.text,
          });
        this.io.to(m.channel).emit(
            ChatEvent.MESSAGES,
            channeldb.filter((ch) => ch.name === m.channel)[0]
          );
      });

      socket.on(ChatEvent.CHANNELS, () => {
        console.log("[server](channels)");
        this.io.emit(
          ChatEvent.CHANNELS,
          channeldb.map((item) => item.name)
        );
      });
      socket.on(ChatEvent.MESSAGES, (channel: String) => {
        console.log("[server](messages)");
        this.io.to(channel).emit(
            ChatEvent.MESSAGES,
            channeldb.filter((ch) => ch.name === channel)[0]
          );
      });
      socket.on(ChatEvent.CHANNEL_CHANGE, (ch: string) => {
        channeldb.map((item) => socket.leave(item.name));
        socket.join(ch);
        socket.emit(ChatEvent.CHANNEL_CHANGE, channeldb.filter(c => c.name === ch)[0].messages)
      })
      socket.on(ChatEvent.DISCONNECT, () => {
        console.log("Client disconnected");
      });
    });
  }

  get app(): express.Application {
    return this._app;
  }
}
