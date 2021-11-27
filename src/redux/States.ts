import { IMessage } from "./type";

export type State = {
  navigationList: [];
  inputText: string;
  active_channel: string;
  data: IMessage[];
  error: string;
};

export const initialState = {
  navigationList: [],
  inputText: "",
  data: [],
  active_channel: "",
  error: "",
} as State;
