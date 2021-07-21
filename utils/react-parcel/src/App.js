import React, { useState, useEffect } from "react";
import { listenEvent } from "@atlas/utils";

const App = () => {
  const [tasks, updateTasks] = useState([]);
  const [zip, setZip] = useState("04111070");

  useEffect(() => {
    listenEvent("@atlas/react-route/todo/add-task", (event) => {
      updateTasks((oldTasks) => [...oldTasks, event.detail]);
    });
  }, []);

  useEffect(() => {
    console.log("cep");
    try {
      await fetch(`https://viacep.com.br/ws/${zip}/json/`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    } catch (error) {
      return console.log(error);
    }
  }, []);

  /*
  useEffect(() => {
    listenEvent('@atlas/react-route/todo/add-task', event => {
      updateTasks(oldTasks => [
        ...oldTasks,
        event.detail,
      ])
    })
  }, [])*/

  return (
    <>
      <h1>@atlas/react-parcel</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.describe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default App;
