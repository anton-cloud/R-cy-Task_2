import {
  NOTES_STATUS_ARCHIVED,
  NOTES_STATUS_ACTIVE,
} from "../reducers/activStatusTaskViewReducer";

export const notesStatusActive = () => ({
  type: NOTES_STATUS_ACTIVE,
});

export const notesStatusArchived = () => ({
  type: NOTES_STATUS_ARCHIVED,
});
