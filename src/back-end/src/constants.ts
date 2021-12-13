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
export const MAX_ATTEMPTS = 5;
export const TRY_TIME = 1 * 60000; //in ms
