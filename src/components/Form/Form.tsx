import { useEffect, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getCategory } from "../../services/getCategory";
import { getCurrentDate } from "../../services/getCurrentDate";
import { getDatesFromStr } from "../../services/getDatesFromStr";
import { getIcon } from "../../services/getIcon";
import { INote } from "../../types/note";

const initialNote = {
  id: null,
  name: null,
  created: null,
  category: null,
  content: null,
  dates: null,
  active: null,
  icon: null,
};

const Form = () => {
  // component state
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [currentNode, setCurrentNode] = useState(initialNote);
  // redux state
  const notes: INote[] = useTypedSelector((state) => state.note["notes"]);
  const changeableNoteId: number = useTypedSelector(
    (state) => state.note["changeableNoteId"]
  );
  // action-creator
  const { togleModal, addNote, editNote } = useActions();
  // react hook
  useEffect(() => {
    if (changeableNoteId) {
      const currentNode: any = [...notes].filter(
        (note) => note["id"] === changeableNoteId
      );
      setName(currentNode[0].name);
      setCategory(currentNode[0].category);
      setContent(currentNode[0].content);
      setCurrentNode(currentNode[0]);
    }
  }, []);

  const onHandleChange = (e: any) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "category":
        setCategory(value);
        break;
      case "content":
        setContent(value);
        break;

      default:
        return;
    }
  };

  const onHandleSubmit = (e: any) => {
    e.preventDefault();

    if (name === "" || category === "" || content === "") {
      return;
    }

    const newNote = {
      id: currentNode.id ? currentNode.id : Date.now(),
      name: name,
      created: currentNode.id
        ? currentNode.created
        : getCurrentDate(new Date()),
      category: getCategory(category),
      content: content,
      dates: getDatesFromStr(content),
      active: true,
      icon: getIcon(category),
    };

    changeableNoteId ? editNote(changeableNoteId, newNote) : addNote(newNote);
    togleModal();
  };

  return (
    <form id="form" onSubmit={onHandleSubmit}>
      <div className=" form__item">
        <label>
          Name:
          <br />
          <input
            type="text"
            id="form__name"
            name="name"
            onChange={onHandleChange}
            value={name}
          />
        </label>
      </div>
      <div className="form__item">
        <label>
          Category:
          <br />
          <select id="form__category" name="category" onChange={onHandleChange}>
            <option value="" selected>
              ---
            </option>
            {category === "Task" ? (
              <option value="task" selected>
                Task
              </option>
            ) : (
              <option value="task">Task</option>
            )}
            {category === "Random Thought" ? (
              <option value="random_thought" selected>
                Random Thought
              </option>
            ) : (
              <option value="random_thought">Random Thought</option>
            )}

            {category === "Idea" ? (
              <option value="idea" selected>
                Idea
              </option>
            ) : (
              <option value="idea">Idea</option>
            )}
          </select>
        </label>
      </div>
      <div className="form__item">
        <label>
          Content:
          <br />
          <textarea name="content" onChange={onHandleChange} value={content} />
        </label>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
