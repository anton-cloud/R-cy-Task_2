import { modalAction } from "../../types/modal";

export const TOGLE_STATE = "TOGLE_STATE";

export const modalReducer = (state = false, action: modalAction) => {
  switch (action.type) {
    case TOGLE_STATE:
      return !state;

    default:
      return state;
  }
};
