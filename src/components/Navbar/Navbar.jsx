import React from "react";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";
import s from "./Navbar.module.css";
const Navbar = (props) => {
  return (
    <nav className={s.navbar}>
      <div>
        <div>
          <NavLink to="/profile" className={Navbar => Navbar.isActive ? s.active : s.item}>Profile</NavLink>
        </div>
        <div>
          <NavLink to="/dialogs" className={Navbar => Navbar.isActive ? s.active : s.item}>Messages</NavLink>
        </div>
        <div >
          <NavLink to="/news" className={Navbar => Navbar.isActive ? s.active : s.item}>News</NavLink>
        </div>
        <div>
          <NavLink to="/music" className={Navbar => Navbar.isActive ? s.active : s.item}>Music</NavLink>
        </div>
        <div>
          <NavLink to="/settings" className={Navbar => Navbar.isActive ? s.active : s.item}>Settings</NavLink>
        </div>
        <div>
          <NavLink to="/users" className={Navbar => Navbar.isActive ? s.active : s.item}>Users</NavLink>
        </div>
        <div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
