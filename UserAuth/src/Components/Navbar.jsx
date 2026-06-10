import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Home, User, LogIn, LogOut, LayoutDashboard } from "lucide-react";

function Navbar() {
  const auth = useAuth();

  const handleLogout = () => {
    auth.logout();
  };

  return (
    <div className="navbar" style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px 40px",
      background: "#333",
      color: "white",
      alignItems: "center"
    }}>
      <div>
        <Link to="/" style={{ color: "white", textDecoration: "none", marginRight: "20px" }}>
          Auth Demo
        </Link>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <Home size={18} /> Home
        </Link>
      </div>

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        {auth.user ? (
          <>
            <Link to="/dashboard" style={{ color: "white", textDecoration: "none" }}>
              <LayoutDashboard size={18} /> Dashboard
            </Link>
            <span><User size={18} /> {auth.user}</span>
            <button onClick={handleLogout} style={{ cursor: "pointer", padding: "5px 10px" }}>
              <LogOut size={18} /> Logout
            </button>
          </>
        ) : (
          <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
            <LogIn size={18} /> Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;