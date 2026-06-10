import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || "/dashboard";

  useEffect(() => {
    console.log(auth.user);
  }, [auth.user]);

  const handleLogin = () => {
    if (name.trim() === "") {
      alert("Please enter a name!");
      return;
    }
    auth.login(name);
    navigate(redirectPath, { replace: true });
  };

  return (
    <div className="login-container">
      <h2>Welcome! Please Login</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="login-input"
      />
      <br />
      <button onClick={handleLogin} className="btn-login">Login</button>
    </div>
  );
}

export default Login;