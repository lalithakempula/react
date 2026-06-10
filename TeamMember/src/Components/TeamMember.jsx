import React from "react";

function TeamMember({ member, onToggle }) {
  return (
    <div className="card">
      <h2>{member.name}</h2>
      <p><strong>Role:</strong> {member.role}</p>
      <p>
        <strong>Status:</strong>{" "}
        {member.available ? "✅ Available" : "❌ Not Available"}
      </p>
      <button onClick={onToggle}>Toggle Availability</button>
    </div>
  );
}

export default TeamMember;