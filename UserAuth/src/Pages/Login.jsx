import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  console.log("location from login", location);

  const redirectPath = location.state?.path || "/";

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
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Welcome! Please Login</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "10px", margin: "10px" }}
      />
      <br />
      <button onClick={handleLogin} style={{ padding: "10px 20px", cursor: "pointer" }}>
        Login
      </button>
    </div>
  );
}

export default Login;