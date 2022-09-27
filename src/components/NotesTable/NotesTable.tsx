import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { INote } from "../../types/note";
import NotesItem from "./NotesItem";

const NotesTable: React.FC = () => {
  // redux state
  const notes: INote[] | [] = useTypedSelector((state) => state.note["notes"]);

  // action-creator
  const { togleModal, addChangeableNoteId } = useActions();

  return (
    <>
      <div>
        <table className="notes-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Created</th>
              <th>Category</th>
              <th>Content</th>
              <th>Dates</th>
              <th>
                <i className="fa-sharp fa-solid fa-download"></i>
                <i className="fa-sharp fa-solid fa-trash"></i>
              </th>
            </tr>
          </thead>
          <tbody className="notes-table__list">
            {[...notes].map((note: INote) => (
              <NotesItem note={note} key={note.id} />
            ))}
          </tbody>
        </table>
        <div className="create-node-btn-wrapper">
          <button
            onClick={() => {
              togleModal();
              addChangeableNoteId(null);
            }}
            className="create-node"
          >
            Create Note
          </button>
        </div>
      </div>
    </>
  );
};

export default NotesTable;
