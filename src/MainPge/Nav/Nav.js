import React from "react";
import logo from "../../components/Login/logo.png";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className={style.nave}>
        <ul>
          <li>
            <img className={style.logo} src={logo} />
          </li>
          <li>
            <button className={style.button}>
              <Link to="/login">Sign IN</Link>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
