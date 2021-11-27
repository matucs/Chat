export interface IChannel {
  name: string;
  active: "active" | "";
  messages: IMessage[];
}

export interface IMessage {
  date: string;
  username: string;
  text: string;
}
