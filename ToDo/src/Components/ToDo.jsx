import React from "react";

function Post({ task, index, toggleTask, deleteTask }) {
  return (
    <div className="task-row">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(index)}
      />

      <span className={task.completed ? "completed" : ""}>
        {task.text}
      </span>

      <button
        className="delete-btn"
        onClick={() => deleteTask(index)}
      >
        Delete
      </button>
    </div>
  );
}

export default Post;