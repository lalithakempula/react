import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [entries, setEntries] = useState([]);

  function handleSubmit() {
    if (name.trim() === "" || feedback.trim() === "") return;
    setEntries([...entries, { name, feedback }]);
    setName("");
    setFeedback("");
  }

  return (
    <div className="container">
      <h1>Feedback Collector</h1>

      <label>Name:</label>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Feedback:</label>
      <textarea
        placeholder="Your feedback"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>

      <h2>Feedback Entries</h2>
      {entries.map((entry, index) => (
        <div key={index} className="entry">
          <p><strong>{entry.name}</strong></p>
          <p>{entry.feedback}</p>
        </div>
      ))}
    </div>
  );
}

export default App;