import { Action } from "../type";
import * as channelTypes from "./channelTypes";

export function fetchChannelListSuccess(channels: []): Action {
  return {
    type: channelTypes.FETCH_CHANNELS_LIST_SUCCESS,
    payload: channels,
  };
}

