export enum ChatEvent {
    CONNECT = "connect",
    DISCONNECT = "disconnect",
    MESSAGE = "message",
    MESSAGES = "messages",
    CHANNELS = "channels",
    CHANNEL_CHANGE = "channel_change",
    SPAM = "spam",
    MORE_ATTEMPT = "more_attempt",
  }
  export const SERVER_URL = "http://localhost:8080"