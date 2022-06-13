import React from "react";
import "./modal.css";
import { MdCancel } from "react-icons/md";

const Modal = ({
  addCounterToList,
  countName,
  handleModal,
  setCountName,
  active,
  errors,
  counters,
}) => {
  return (
    <div className={active === true ? "modal-open" : "modal-close"}>
      <div className="overlay">
        <div className="modal-content">
          <button className="close" onClick={() => handleModal(false)}>
            <MdCancel />
          </button>
          <h1>Ingresa nombre al contador</h1>
          <p>{errors}</p>
          <input
            type="text"
            value={countName}
            onChange={(e) => setCountName(e.target.value)}
          />
          <div className="buttons">
            {counters < 20 && (
              <button
                className="button-check"
                onClick={() => addCounterToList(countName)}
              >
                crear
              </button>
            )}

            <button
              className="button-cancel"
              onClick={() => handleModal(false)}
            >
              cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
