import { notesArchive } from "../../data/notesArchive";
import { NoteAction } from "../../types/note";

export const CHANGE_ACTIVE_COUNT_TASKS = "CHANGE_ACTIVE_COUNT_TASKS";
export const UPDATE_ARCHIVE_DATA = "UPDATE_ARCHIVE_DATA";

const initialState = {
  notesArchive,
};

export const noteArchiveReducer = (
  state = initialState,
  action: NoteAction
) => {
  switch (action.type) {
    case UPDATE_ARCHIVE_DATA:
      return {
        notesArchive: [...action.payload],
      };

    default:
      return state;
  }
};
