import { useAuth } from "../context/AuthContext";
import { useLocation } from "react-router-dom";

function Dashboard() {
  const auth = useAuth();
  const location = useLocation();

  console.log(location);

  const handleLogout = () => {
    auth.logout();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Dashboard</h1>
      <p style={{ fontSize: "20px" }}>Welcome <b>{auth.user}</b></p>
      <button onClick={handleLogout} style={{ padding: "10px 20px", cursor: "pointer", marginTop: "20px" }}>
        Sign Out
      </button>
    </div>
  );
}

export default Dashboard;