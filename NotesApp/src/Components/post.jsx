import React from "react";

function Post({ text }) {
  return (
    <div className="note-card">
      <p>{text}</p>
    </div>
  );
}

export default Post;