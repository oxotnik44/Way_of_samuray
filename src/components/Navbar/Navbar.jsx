import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
import iconProfile from "./../../assets/icon-navbar/iconProfile.png";
import iconMessages from "./../../assets/icon-navbar/iconMessages.png";
import iconNews from "./../../assets/icon-navbar/iconNews.png";
import iconMusic from "./../../assets/icon-navbar/iconMusic.png";
import iconFriends from "./../../assets/icon-navbar/iconFriends.png";
import iconSettings from "./../../assets/icon-navbar/iconSettings.png";

const Navbar = (props) => {
  return (
    <nav className={s.navbar}>
      <div className={s.navbarItem}>
        <div>
          <img src={iconProfile} />
          <NavLink
            to={`/profile/${props.userId}`}
            className={(Navbar) => (Navbar.isActive ? s.active : s.item)}
          >
            Profile
          </NavLink>
        </div>
        <div>
          <img src={iconMessages} />
          <NavLink
            to="/dialogs"
            className={(Navbar) => (Navbar.isActive ? s.active : s.item)}
          >
            Messages
          </NavLink>
        </div>
        <div>
          <img src={iconNews} />
          <NavLink
            to="/news"
            className={(Navbar) => (Navbar.isActive ? s.active : s.item)}
          >
            News
          </NavLink>
        </div>
        <div>
          <img src={iconMusic} />
          <NavLink
            to="/music"
            className={(Navbar) => (Navbar.isActive ? s.active : s.item)}
          >
            Music
          </NavLink>
        </div>
        <div>
          <img src={iconSettings} />
          <NavLink
            to="/settings"
            className={(Navbar) => (Navbar.isActive ? s.active : s.item)}
          >
            Settings
          </NavLink>
        </div>
        <div>
          <img src={iconFriends} />
          <NavLink
            to="/users"
            className={(Navbar) => (Navbar.isActive ? s.active : s.item)}
          >
            Users
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
