import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Home, User, LogIn, LogOut, LayoutDashboard } from "lucide-react";

function Navbar() {
  const auth = useAuth();

  const handleLogout = () => {
    auth.logout();
  };

  return (
    <div className="navbar">
      <div>
        <Link to="/" className="nav-link">Auth Demo</Link>
        <Link to="/" className="nav-link"><Home size={18} /> Home</Link>
      </div>

      <div className="nav-right">
        {auth.user ? (
          <>
            <Link to="/dashboard" className="nav-link">
              <LayoutDashboard size={18} /> Dashboard
            </Link>
            <span><User size={18} /> {auth.user}</span>
            <button onClick={handleLogout} className="btn-logout">
              <LogOut size={18} /> Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="nav-link">
            <LogIn size={18} /> Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;