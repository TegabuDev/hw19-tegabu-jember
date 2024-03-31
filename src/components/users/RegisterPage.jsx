import React, { useRef } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/usersSlice";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleRegister = (e) => {
    e.preventDefault();
    const id = nanoid();
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (!username.trim() || !password.trim() || !email.trim()) return;
    const newUser = { id, username, email, password };
    dispatch(addUser(newUser));
    navigate("/login");
  };

  return (
    <div className="app">
      <div className="wrapper">
        <form onSubmit={handleRegister}>
          <div className="heading">
            <h3>Signup page</h3>
          </div>
          <div className="input-box">
            <input
              type="text"
              ref={usernameRef}
              placeholder="Username"
              name="name"
              required
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="email"
              ref={emailRef}
              placeholder=" Email"
              name="email"
              required
            />
            <MdEmail className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              ref={passwordRef}
              placeholder=" Password"
              name="password"
              required
            />
            <FaLock className="icon" />
          </div>
          <div className="login-btn">
            <button type="submit">Sign up</button>
          </div>
          <div className="signup-link">
            <p>
              Already a member ?{" "}
              <button onClick={() => navigate("/login")}>Login</button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
