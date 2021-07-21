import React, { useState } from "react";
import Parcel from "single-spa-react/parcel";
import { v4 as uuid } from "uuid";
import { emitEvent } from "@atlas/utils";

const App = ({ name }) => {
  const [task, updateTask] = useState("");

  const handleChange = (event) => {
    updateTask(event.target.value);
  };
  /*
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Salvando...");
    updateTask("");
  };*/
  /*
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatchEvent(
      new CustomEvent("@atlas/react-route/todo/add-task", {
        detail: {
          id: uuid(),
          describe: task,
        },
      })
    );
  };*/

  const handleSubmit = (event) => {
    event.preventDefault();
    emitEvent("@atlas/react-route/todo/add-task", {
      id: uuid(),
      describe: task,
    });
    updateTask("");
  };

  return (
    <>
      <h1>{name}Teste</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={task} />
        <button>Add</button>
      </form>
      <Parcel config={() => System.import("@atlas/react-parcel")} />
    </>
  );
};

export default App;
