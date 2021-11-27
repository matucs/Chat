import express, { Request, Response, Application } from "express";
import channeldb from "./db/channeldb";
import { IChannel, IMessage } from "./model";

const app: Application = express();
const server = require("http").Server(app);
const port = process.env.PORT || 8080;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));
app.use(bodyParser.json({ limit: "50mb" }));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  next();
});
app.get("/channels", (req: Request, res: Response) => {
  const navigationList = Array<string>();
  channeldb.map((m) => {
    navigationList.push(m.name);
  });
  res.send(navigationList);
});
app.get("/messages/:channel", (req: Request, res: Response) => {
  res.json(
    channeldb.filter(
      (c: IChannel) => c.name.toLowerCase() === req.params.channel.toLowerCase()
    )[0]?.messages
  );
});
app.post("/:channel", (req: Request, res: Response) => {
  const result = channeldb.filter(
    (item) =>
      item.name.toLowerCase() === req.params.channel.toString().toLowerCase()
  );
  if (result.length === 0) {
    res.json({
      res: `There is no channel with name of ${req.params.channel}.`,
    });
  }
  let newMessage = req.body.message;
  //set date equal to now for message date before send it to the in-memory database.
  newMessage.date = new Date().toLocaleString();

  result[0].messages.push(newMessage as IMessage);
  res.send(result[0].messages);
});

server.listen(port, () => {
  console.log(`Listenning to port ${port} ...`);
});
