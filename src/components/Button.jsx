import React from 'react'

const Button = ({addCounterToList, countName, counters}) => {
  return (
    <button onClick={() => addCounterToList(countName)}>  
    { (counters === 0) ? 'Crear Contador' : 'Agregar Contador' }
    </button>
  )
}

export default Button