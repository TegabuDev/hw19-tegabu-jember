import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../store/userSlice";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ username, password })).then((res) => {
      if (res.payload !== null) {
        navigate("/profile");
      } else {
        navigate("/signup");
      }
    });
  };

  return (
    <div className="app">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <div className="heading">
            <h3>Login page</h3>
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaLock className="icon" />
          </div>
          <div className="login-btn">
            <button type="submit">Login</button>
          </div>
        </form>
        <div className="signup-link">
          <p>
            Don't have an account?{" "}
            <button onClick={() => navigate("/signup")}>Sign up</button>
          </p>
        </div>
      </div>
    </div>
  );
}
