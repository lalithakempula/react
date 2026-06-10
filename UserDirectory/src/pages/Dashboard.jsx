import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const auth = useAuth();
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleCardClick = (user) => {
    alert(`Name: ${user.name}\nEmail: ${user.email}\nCompany: ${user.company.name}`);
  };

  return (
    <div className="dashboard">
      <h1>User Dashboard</h1>
      <p className="welcome">Welcome <b>{auth.user}</b></p>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      <div className="cards-grid">
        {filteredUsers.map(user => (
          <div
            key={user.id}
            onClick={() => handleCardClick(user)}
            className="user-card"
          >
            <h3>{user.name}</h3>
            <p>📧 Email: {user.email}</p>
            <p>🏢 Company: {user.company.name}</p>
          </div>
        ))}
      </div>

      {filteredUsers.length === 0 && <p className="no-data">No users found</p>}

      <button onClick={auth.logout} className="btn-logout-main">
        Sign Out
      </button>
    </div>
  );
}

export default Dashboard;