import React, { useState } from "react";
import Counter from "./Counter";
import Modal from "./Modal";
import "./style.css"

const Container = () => {

    let count;
    const [ countData, setCountData ] = useState([])
    const [ countName, setCountName ] = useState('')
    const [ counters , setCounters ] = useState(0)
    const [ active, setActive] = useState(false)
    
    const addCounterToList = (name) => {
        if(name === '' || name === null) return alert('Ingresa un Nombre al contador')
        if(name.length > 20) return alert('Pueden ser hasta 20 carácteres'), name=''  

        setCounters( counters + 1 )
        setCountData(  
            [ ...countData,
            { name: name, counter: <Counter  />, index: counters} ],
            )
        }

        const deleteCounterToList = (id) => {
            setCounters( counters - 1 )
            const filtered = countData.filter((counter, i) => counter.index !== id )
            setCountData(filtered)
        }

        const handleModal = (state) => {
                setActive(state)
        }


    countData.sort( (a,b) => a.name.localeCompare(b.name) )

    

  return (
    <div>
        {(counters < 20) && <button onClick={()=>handleModal(true)}>Crear Contador</button> }
        <Modal addCounterToList={addCounterToList} countName={countName} handleModal={handleModal} setCountName={setCountName} active={active}/>
        <h3>counters: {counters} </h3>
        <ul>
           {
               countData.map((item, i) => {

                   return(
                       <div key={i}>
                           <button onClick={() => deleteCounterToList(item.index)}>x</button>
                           <h1>{item.name}</h1>
                           {item.counter}
                       </div>
                   )
               })
           }
       </ul>
    </div>
  );
};

export default Container;
