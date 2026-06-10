import { useState } from "react";

let nextId = 1;

function EditTodo() {
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState("");

  function handleAdd() {
    if (inputText.trim() === "") return;
    setTasks([
      ...tasks,
      { id: nextId++, text: inputText, completed: false, isEditing: false, editText: "" },
    ]);
    setInputText("");
  }

  function handleToggle(id) {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  }

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function handleEdit(id) {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, isEditing: true, editText: task.text } : task
    ));
  }

  function handleEditChange(id, value) {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, editText: value } : task
    ));
  }

  function handleSave(id) {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, text: task.editText, isEditing: false } : task
    ));
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My To-Do List</h1>

      <div style={styles.inputRow}>
        <input
          style={styles.input}
          type="text"
          placeholder="Add a new task..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        />
        <button style={styles.addBtn} onClick={handleAdd}>Add</button>
      </div>

      <ul style={styles.list}>
        {tasks.map((task) => (
          <li key={task.id} style={styles.listItem}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggle(task.id)}
              style={styles.checkbox}
            />

            {task.isEditing ? (
              <input
                style={{ ...styles.input, flex: 1 }}
                type="text"
                value={task.editText}
                onChange={(e) => handleEditChange(task.id, e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSave(task.id)}
                autoFocus
              />
            ) : (
              <span style={{
                ...styles.taskText,
                textDecoration: task.completed ? "line-through" : "none",
                color: task.completed ? "#999" : "#222",
              }}>
                {task.text}
              </span>
            )}

            <div style={styles.btnGroup}>
              {task.isEditing ? (
                <button style={styles.saveBtn} onClick={() => handleSave(task.id)}>Save</button>
              ) : (
                <button style={styles.editBtn} onClick={() => handleEdit(task.id)}>Edit</button>
              )}
              <button style={styles.deleteBtn} onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>

      {tasks.length === 0 && <p style={styles.empty}>No tasks yet. Add one above!</p>}
    </div>
  );
}

const styles = {
  container: { maxWidth: 560, margin: "40px auto", fontFamily: "'Segoe UI', sans-serif", padding: "0 16px" },
  title: { fontSize: 28, fontWeight: 700, marginBottom: 20, color: "#1a1a1a" },
  inputRow: { display: "flex", gap: 8, marginBottom: 24 },
  input: { flex: 1, padding: "10px 14px", fontSize: 15, border: "1.5px solid #ddd", borderRadius: 8, outline: "none" },
  addBtn: { padding: "10px 20px", background: "#4f46e5", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer", fontWeight: 600, fontSize: 15 },
  list: { listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 },
  listItem: { display: "flex", alignItems: "center", gap: 10, background: "#f9f9f9", padding: "12px 14px", borderRadius: 8, border: "1px solid #eee" },
  checkbox: { width: 18, height: 18, cursor: "pointer" },
  taskText: { flex: 1, fontSize: 15 },
  btnGroup: { display: "flex", gap: 6 },
  editBtn: { padding: "5px 12px", background: "#f0f0f0", border: "none", borderRadius: 6, cursor: "pointer", fontSize: 13, fontWeight: 600 },
  saveBtn: { padding: "5px 12px", background: "#22c55e", color: "#fff", border: "none", borderRadius: 6, cursor: "pointer", fontSize: 13, fontWeight: 600 },
  deleteBtn: { padding: "5px 12px", background: "#fee2e2", color: "#dc2626", border: "none", borderRadius: 6, cursor: "pointer", fontSize: 13, fontWeight: 600 },
  empty: { textAlign: "center", color: "#aaa", fontSize: 14, marginTop: 20 },
};

export default EditTodo;