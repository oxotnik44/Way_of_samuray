import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
const Header = (props) => {
  return (
    <header>
      {props.isAuth ? (
        <div>
          {props.login}
          <button onClick={props.logout}>Log out</button>
        </div>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
      <div className={s.imgAvatar}>
        <img src="https://placepic.ru/wp-content/uploads/2018/11/1119-1024x967.jpg" />
      </div>
      <div className={s.textName}>
        <p>Name Surname</p>
      </div>
      <NavLink to="/">
        <div className={s.nameApp}>App Name</div>
      </NavLink>

      <div className={s.imgLogo}></div>

      <div className={s.loginBlock}></div>
    </header>
  );
};
export default Header;
