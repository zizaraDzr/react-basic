import { useState } from "react";
import Modal from "./Modal.js";
import Backdrop from "./Backdrop.js";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandle() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button onClick={deleteHandle} className="btn">
          delete
        </button>
      </div>
      {modalIsOpen && <Modal />}
      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
}
export default Todo;
