import { modalAction } from "../../types/modal";

export const NOTES_STATUS_ACTIVE = "NOTES_STATUS_ACTIVE";
export const NOTES_STATUS_ARCHIVED = "NOTES_STATUS_ARCHIVED";

export const notesStatusReducer = (state = true, action: modalAction) => {
  switch (action.type) {
    case NOTES_STATUS_ACTIVE:
      return (state = true);

    case NOTES_STATUS_ARCHIVED:
      return (state = false);

    default:
      return state;
  }
};
