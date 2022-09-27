import { NoteAction } from "../../types/note";
import {
  ADD_CHANGEABLE_NOTE_ID,
  ADD_NOTE,
  ARCHIVE_NOTE,
  DELETE_NOTE,
  EDIT_NOTE,
} from "../reducers/noteReducer";

export const addNote = (newNote: object): NoteAction => ({
  type: ADD_NOTE,
  payload: newNote,
});

export const removeNoteById = (id: number): NoteAction => ({
  type: DELETE_NOTE,
  payload: id,
});

export const editNote = (idx: number, changedNote: object): NoteAction => ({
  type: EDIT_NOTE,
  payload: { idx, changedNote },
});

export const archiveNote = (id: number): NoteAction => ({
  type: ARCHIVE_NOTE,
  payload: id,
});

export const addChangeableNoteId = (id: number | null): NoteAction => ({
  type: ADD_CHANGEABLE_NOTE_ID,
  payload: id,
});
