import { UPDATE_ARCHIVE_DATA } from "../reducers/noteArchiveReducer";

export const updateArchiveData = (updatedArchiveData: object) => ({
  type: UPDATE_ARCHIVE_DATA,
  payload: updatedArchiveData,
});
