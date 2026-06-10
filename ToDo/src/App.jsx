import React, { useState } from "react";
import "./App.css";
import Post from "./Components/ToDo";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([
    { text: "dance", completed: true },
    { text: "coding", completed: false },
  ]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([
      ...tasks,
      {
        text: task,
        completed: false,
      },
    ]);

    setTask("");
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed =
      !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>

      <div className="input-box">
        <input
          type="text"
          placeholder="Add a new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTask}>Add</button>
      </div>

      {tasks.map((item, index) => (
        <Post
          key={index}
          task={item}
          index={index}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default App;