import { combineReducers } from "redux";
import { modalReducer } from "./modalReducer";
import { noteReducer } from "./noteReducer";
import { noteArchiveReducer } from "./noteArchiveReducer";
import { notesStatusReducer } from "./activStatusTaskViewReducer";

export const rootReducer = combineReducers({
  note: noteReducer,
  countTable: noteArchiveReducer,
  isOpenModal: modalReducer,
  notesStatusActive: notesStatusReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
