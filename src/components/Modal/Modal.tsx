import { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { modalProps } from "../../types/modal";
import "./Modal.css";

const Modal = (props: modalProps) => {
  // redux state
  const isOpenModal = useTypedSelector((state) => state.isOpenModal);
  // action-creator
  const { togleModal, addChangeableNoteId } = useActions();
  // react hook
  useEffect(() => {
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
      addChangeableNoteId(null);
    };
  }, []);

  // event listeners
  const handleBackdropClick = (e: any) => {
    if (e.target === e.currentTarget) {
      togleModal();
    }
  };

  const handleEsc = (e: any) => {
    if (e.code === "Escape") togleModal();
  };

  return (
    <>
      {isOpenModal && (
        <div className="modal" onClick={handleBackdropClick}>
          <div className="modal__content">{props.children}</div>
        </div>
      )}
    </>
  );
};

export default Modal;
