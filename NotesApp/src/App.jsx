import React, { useState } from "react";
import "./App.css";
import Post from "./Components/Post";

function App() {
  const [notes, setNotes] = useState([
    { text: "This is your first note" },
    { text: "Welcome to the notes app!" },
  ]);
  const [input, setInput] = useState("");

  function addNote() {
    if (input.trim() === "") return;
    setNotes([...notes, { text: input }]);
    setInput("");
  }

  return (
    <div>
      <nav className="navbar">
        <h1>Nav</h1>
      </nav>

      <div className="notes-container">
        {notes.map((note, index) => (
          <Post key={index} text={note.text} />
        ))}
      </div>

      <div className="input-area">
        <input
          type="text"
          placeholder="Type your note..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addNote}>+</button>
      </div>
    </div>
  );
}

export default App;