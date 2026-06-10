import React, { useState } from "react";
import "./App.css";
import TeamMember from "./Components/TeamMember";

function App() {
  const [members, setMembers] = useState([
    { name: "Sridhar", role: "Frontend Intern", available: true },
    { name: "Lalitha", role: "Backend Intern", available: false },
    { name: "Harita", role: "Team Lead", available: true },
  ]);

  function toggleAvailability(index) {
    const updated = [...members];
    updated[index].available = !updated[index].available;
    setMembers(updated);
  }

  const availableCount = members.filter((m) => m.available).length;

  return (
    <div className="container">
      <h1>Team Members</h1>
      <p className="count">
        ✅ Available: {availableCount} / {members.length}
      </p>
      {members.map((member, index) => (
        <TeamMember
          key={index}
          member={member}
          onToggle={() => toggleAvailability(index)}
        />
      ))}
    </div>
  );
}

export default App;