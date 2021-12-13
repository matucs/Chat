import { Dispatch } from "react";
import { Action } from "../type";
import {
  fetchChannelListSuccess,
} from "./channelActions";

export const fetchChannels = (channels: []) => {
  return (dispatch: Dispatch<Action>) => {
        dispatch(fetchChannelListSuccess(channels));
  };
};

