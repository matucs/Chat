import { Dispatch } from "react";
import { Action,IMessage } from "../type";
import axios from "axios";
import {
  fetchChannelListFailure,
  fetchChannelListSuccess,
  fetchMessagesSuccess,
  handleEditPannelSuccess,
  postNewMessageSuccess,
  updateActiveChannelSuccess,
} from "./channelActions";

export const fetchChannels = () => {
  return (dispatch: Dispatch<Action>) => {
    axios
      .get<[]>("http://localhost:8080/channels")     
      .then((response) => { 
        dispatch(fetchChannelListSuccess(response?.data));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(fetchChannelListFailure(error));
      });
  };
};

export const updateActiveChannel = (name: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch(updateActiveChannelSuccess(name));
  };
};
export const fetchMessages = (channelName: string) => {
  return (dispatch: Dispatch<Action>) => {
    axios
      .get<[]>("http://localhost:8080/messages/" + channelName)
      .then((response) => {
        dispatch(fetchMessagesSuccess(response.data));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(fetchChannelListFailure(error));
      });
  };
};
export const postNewMessage = (message: IMessage, channel: string) => {
  return (dispatch: Dispatch<Action>) => {
    axios
      .post<[]>("http://localhost:8080/" + channel, { message: message })
      .then((response) => { 
      
        dispatch(postNewMessageSuccess(response.data));
        dispatch(handleEditPannelSuccess(message.text));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(fetchChannelListFailure(error));
      });
  };
};
