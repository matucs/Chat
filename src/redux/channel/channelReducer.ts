import { Action } from "../type";
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
        navigationList: action.payload as [] 
      };
  }
  return state;
};
export default channelListReducer;
