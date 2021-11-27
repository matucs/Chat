import { Action } from "../type";
import * as channelTypes from "./channelTypes";

export function fetchChannelListSuccess(channels: []): Action {
  return {
    type: channelTypes.FETCH_CHANNELS_LIST_SUCCESS,
    payload: channels,
  };
}
export function fetchChannelListFailure(error: string): Action {
  return {
    type: channelTypes.FETCH_CHANNELS_LIST_FAILURE,
    payload: error,
  };
}
export function updateActiveChannelSuccess(name: string): Action {
  return {
    type: channelTypes.UPDATE_ACTIVE_CHANNEL_SUCCESS,
    payload: name,
  };
}
export function fetchMessagesSuccess(messages: []): Action {
  return {
    type: channelTypes.FETCH_MESSAGES_SUCCESS,
    payload: messages,
  };
}
export function postNewMessageSuccess(channels: []): Action {
  return {
    type: channelTypes.POST_NEW_MESSAGE,
    payload: channels,
  };
}
export function handleEditPannelSuccess(message: string): Action {
  return {
    type: channelTypes.HANDLE_EDIT_PANEL,
    payload: message,
  };
}
