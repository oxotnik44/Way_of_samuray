import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="https://placepic.ru/wp-content/uploads/2018/11/1119-1024x967.jpg" />
      <div className={s.loginBlock}>
      {props.isAuth ? props.login: <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};
export default Header;
