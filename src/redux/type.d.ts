
export interface IMessage {
  date: string;
  text: string;
}
export interface IChannel {
  name: string;
  messages: IMessage[];
}
type Action = {
  type: string;
  payload: string |[];
};
