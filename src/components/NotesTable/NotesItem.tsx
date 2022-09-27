import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const NotesItem = ({ note }: any) => {
  // redux state
  const isNotesActive: boolean = useTypedSelector(
    (state) => state.notesStatusActive
  );

  // action-creator
  const {
    togleModal,
    addChangeableNoteId,
    removeNoteById,
    archiveNote,
  } = useActions();

  if (isNotesActive ? note.active : !note.active) {
    return (
      <>
        <tr key={note.id} data-id={note.id}>
          <td className="first-col">
            <div>
              <i className={`fa-sharp fa-solid ${note.icon}`}></i>
            </div>
            {note.name}
          </td>
          <td>{note.created}</td>
          <td>{note.category}</td>
          <td>{note.content}</td>
          <td>{note.dates}</td>
          <td>
            <button
              className="btn edit-note-btn"
              onClick={() => {
                togleModal();
                addChangeableNoteId(note.id);
              }}
            >
              <i className="fa-sharp fa-solid fa-pencil"></i>
            </button>
            <button
              onClick={() => {
                archiveNote(note.id);
              }}
              className="btn archive-note-btn"
            >
              <i className="fa-sharp fa-solid fa-download"></i>
            </button>
            <button
              onClick={() => {
                removeNoteById(note.id);
              }}
              className="btn delete-note-btn"
            >
              <i className="fa-sharp fa-solid fa-trash"></i>
            </button>
          </td>
        </tr>
      </>
    );
  }

  return <></>;
};

export default NotesItem;
