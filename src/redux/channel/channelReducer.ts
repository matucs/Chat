import { Action, IMessage } from "../type";
import * as actionTypes from "./channelTypes";
import { State, initialState } from "../States";

const channelListReducer = (
  state: State = initialState,
  action: Action
): State => {
  switch (action.type) {
    case actionTypes.FETCH_CHANNELS_LIST_SUCCESS:
      return {
        ...state,
        navigationList: action.payload as [] ,
        error: "",
      };
    case actionTypes.UPDATE_ACTIVE_CHANNEL_SUCCESS:
      return {
        ...state,
        active_channel: (action.payload as string),
        error: "",
      };
    case actionTypes.FETCH_MESSAGES_SUCCESS:
      return {
        ...state,
        data: action.payload as IMessage[],
        error: "",
      };
    case actionTypes.HANDLE_EDIT_PANEL:
      return {
        ...state,
        inputText: action.payload as string,
        error: "",
      };
      case actionTypes.POST_NEW_MESSAGE:
        return {
          ...state,
          data: action.payload as IMessage[],
          error: "",
        };
  }
  return state;
};

export default channelListReducer;
