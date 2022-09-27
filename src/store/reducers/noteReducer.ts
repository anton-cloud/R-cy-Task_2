import { notes } from "../../data/notes";
import { NoteAction, NoteState } from "../../types/note";

export const EDIT_NOTE = "EDIT_NOTE";
export const ARCHIVE_NOTE = "ARCHIVE_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const ADD_NOTE = "ADD_NOTE";
export const ADD_CHANGEABLE_NOTE_ID = "ADD_CHANGEABLE_NOTE_ID";

const initialState: NoteState = {
  notes,
  changeableNoteId: null,
};

export const noteReducer = (state = initialState, action: NoteAction) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        notes: [...state.notes, action.payload],
      };

    case DELETE_NOTE:
      return {
        notes: [...state.notes.filter((note) => note.id !== action.payload)],
      };

    case EDIT_NOTE:
      return {
        notes: [
          ...state.notes.map((note, idx) =>
            note.id === action.payload.idx
              ? (notes[idx] = { ...notes[idx], ...action.payload.changedNote })
              : note
          ),
        ],
      };

    case ARCHIVE_NOTE:
      return {
        notes: [
          ...state.notes.map((note, index) =>
            note.id === action.payload
              ? { ...note, active: !note.active }
              : note
          ),
        ],
      };

    case ADD_CHANGEABLE_NOTE_ID:
      return {
        ...state,
        changeableNoteId: action.payload,
      };

    default:
      return state;
  }
};
