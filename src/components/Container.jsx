import React, { useState } from "react";
import Counter from "./Counter";
import Modal from "./Modal";
import { BsFillTrashFill } from "react-icons/bs";
import "../App.css";

const Container = () => {
  const [countData, setCountData] = useState([]);
  const [countName, setCountName] = useState("");
  const [counters, setCounters] = useState(0);
  const [errors, setErrors] = useState("");
  const [active, setActive] = useState(false);

  const addCounterToList = (name) => {
    if (name === "" || name === null)
      return setErrors("El nombre del contador esta vacío");
    if (name.length > 20)
      return setErrors("Pueden ser hasta 20 carácteres"), (name = "");

    setCounters(counters + 1);
    setCountData([
      ...countData,
      { name: name, counter: <Counter />, index: counters },
    ]);
  };

  const deleteCounterToList = (id) => {
    setCounters(counters - 1);
    const filtered = countData.filter((counter) => counter.index !== id);
    setCountData(filtered);
  };

  const handleModal = (state) => {
    setActive(state);
  };

  countData.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="container">
      {counters < 20 && (
        <button className="create-counter" onClick={() => handleModal(true)}>
          Crear Contador
        </button>
      )}
      <Modal
        addCounterToList={addCounterToList}
        countName={countName}
        handleModal={handleModal}
        setCountName={setCountName}
        active={active}
        errors={errors}
        counters={counters}
      />
      <div className="counters-container">
        {countData.map((item, i) => {
          return (
            <div className="counters-individual" key={i}>
              <h2>{item.name}</h2>
              <div className="counters-info">
                {item.counter}
                <button onClick={() => deleteCounterToList(item.index)}>
                  <BsFillTrashFill />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <h3>Contadores Creados: {counters}</h3>
    </div>
  );
};

export default Container;
