import React from 'react'
import "./style.css"


const Modal = ({addCounterToList, countName, handleModal, setCountName, active}) => {
  return (
    <div className={  (active === true) ? 'modal-open' : 'modal-close' }>
            <div className="overlay">
                <div className="modal-content">
                    <button onClick={()=>handleModal(false)}>x</button>
                    <h1>Ingresa nombre al contador</h1>
                    <input  type='text' value={countName} onChange={(e) => setCountName(e.target.value)} />
                    <button onClick={() => addCounterToList(countName)}>aceptar</button>
                    <button onClick={()=>handleModal(false)}>cancelar</button>
                </div>
            </div>
        </div>
  )
}

export default Modal