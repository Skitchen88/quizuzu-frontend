import React, { useState, useEffect } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { login } = useUser();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("✅ LoginPage mounted");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    console.log("🔍 LOGIN CLICKED");

    try {
      console.log("Attempting login with:", email, password);
      await login(email, password);
      console.log("✅ Login successful, navigating...");
      navigate("/"); // redirect on success
    } catch (err) {
      console.log("❌ Login failed:", err.message);
      setError(err.message);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Login</h2>
      <p style={{ background: "#ffff99", padding: "10px" }}>
        🧪 You are on the REAL Login page
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default LoginPage;
