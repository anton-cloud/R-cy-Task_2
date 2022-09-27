import { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getChangedCountTableData } from "../../services/getChangedCountTableData";
import { INote, INoteArchive } from "../../types/note";

const NotesArchiveTable = () => {
  // redux state
  const notes: INote[] | [] = useTypedSelector((state) => state.note["notes"]);
  const isNotesActive: boolean = useTypedSelector(
    (state) => state.notesStatusActive
  );
  const notesArchive: INoteArchive[] | [] = useTypedSelector(
    (state) => state.countTable["notesArchive"]
  );
  // action-creator
  const {
    updateArchiveData,
    notesStatusActive,
    notesStatusArchived,
  } = useActions();
  // react hook
  useEffect(() => {
    updateArchiveData(getChangedCountTableData(notesArchive, notes));
  }, [notes]);

  return (
    <table className="notes-archive-table">
      <thead>
        <tr>
          <th>Note Category</th>
          <th
            className={
              isNotesActive
                ? "notes-archive-table__item notes-archive-table__item_chacked"
                : "notes-archive-table__item"
            }
            id="active"
            onClick={() => notesStatusActive()}
          >
            Active
          </th>
          <th
            className={
              !isNotesActive
                ? "notes-archive-table__item notes-archive-table__item_chacked"
                : "notes-archive-table__item"
            }
            id="atchived"
            onClick={() => notesStatusArchived()}
          >
            Atchived
          </th>
        </tr>
      </thead>
      <tbody className="notes-archive-table__list">
        {notesArchive.map((note: INoteArchive) => (
          <tr key={note.category}>
            <td className="first-col">
              <div>
                <i className={`fa-sharp fa-solid ${note.icon}`}></i>
              </div>
              {note.category}
            </td>
            <td>{note.active}</td>
            <td>{note.archived}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NotesArchiveTable;
