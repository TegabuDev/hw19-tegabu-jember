import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoLogOutOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/userSlice";

export default function Root() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  return (
    <main className="main">
      <header>
        <div className="header-container">
          <h2 className="logo">Todos</h2>
          <nav className="main-nav">
            {user ? (
              <ul>
                <li>
                  <NavLink to="/">Todos</NavLink>
                </li>
                <li>
                  <NavLink to="/profile">
                    <CgProfile />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/login">
                    <IoLogOutOutline onClick={() => dispatch(logout())} />
                  </NavLink>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/signup">Signup</NavLink>
                </li>
              </ul>
            )}
          </nav>
        </div>
      </header>
      <div className="outlet">
        <Outlet />
      </div>
    </main>
  );
}
