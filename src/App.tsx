import Form from "./components/Form/Form";
import Modal from "./components/Modal/Modal";
import NotesArchiveTable from "./components/NotesArchiveTable/NotesArchiveTable";
import NotesTable from "./components/NotesTable/NotesTable";
import "./css/styles.css";

const App = () => {
  return (
    <>
      <NotesTable />
      <NotesArchiveTable />
      <Modal>
        <Form />
      </Modal>
    </>
  );
};

export default App;
