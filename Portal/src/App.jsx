import React, { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    gender: "",
    agreed: false,
  });
  const [students, setStudents] = useState([]);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  }

  function handleRegister() {
    if (!form.fullName || !form.email || !form.phone || !form.course || !form.gender || !form.agreed) return;
    setStudents([...students, form]);
    setForm({ fullName: "", email: "", phone: "", course: "", gender: "", agreed: false });
  }

  return (
    <div className="container">
      <h1>Student Registration Portal</h1>

      <label>Full Name:</label>
      <input type="text" name="fullName" value={form.fullName} onChange={handleChange} />

      <label>Email:</label>
      <input type="text" name="email" value={form.email} onChange={handleChange} />

      <label>Phone Number:</label>
      <input type="text" name="phone" value={form.phone} onChange={handleChange} />

      <label>Course:</label>
      <input type="text" name="course" value={form.course} onChange={handleChange} />

      <div className="gender-row">
        <label>Gender:</label>
        <label><input type="radio" name="gender" value="Male" checked={form.gender === "Male"} onChange={handleChange} /> Male</label>
        <label><input type="radio" name="gender" value="Female" checked={form.gender === "Female"} onChange={handleChange} /> Female</label>
      </div>

      <div className="checkbox-row">
        <input type="checkbox" name="agreed" checked={form.agreed} onChange={handleChange} />
        <label>I agree to the terms and conditions</label>
      </div>

      <button onClick={handleRegister}>Register</button>

      <h2>Registered Students</h2>
      {students.map((s, i) => (
        <div key={i} className="entry">
          <p>{s.fullName} — {s.course} — {s.gender}</p>
        </div>
      ))}
    </div>
  );
}

export default App;