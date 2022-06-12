import React , { useState } from 'react'

const Counter = () => {

    const [counter, setCounter] = useState(0)
    
    const addCount = () => {
        (counter < 20) ? setCounter(counter + 1) : setCounter(20)        
        // setCountQty(counter)
    };


    const restCount = () => {
        (counter > 0 ) ? setCounter(counter - 1) : setCounter(0)
        // setCountQty(counter)
    };



   

  return (
    <>
        {/* <button onClick={()=> deleteCounter(i)}>X</button> */}
        <button onClick={addCount}>+</button>
        {counter}
        <button onClick={restCount}>-</button>
    </>
  )
}

export default Counter