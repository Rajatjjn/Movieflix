import React from "react";
import style from "./Login.module.css";
import Footer from "../footer/Footer";
import logo from "./logo.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { isLogin, name } from "../../Recoil";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  let data = JSON.parse(localStorage.getItem("userDetails"));
  console.log(data, "login");

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [Eerror, SetEerror] = useState();
  const [Perror, setPassrror] = useState();

  const setLoginInfo = useSetRecoilState(isLogin);
  const Navigate = useNavigate();
  function HandleEmail(e) {
    setemail(e.target.value);
  }
  function HandlePass(e) {
    setpassword(e.target.value);
  }
  function HandleLogin() {
    const match = data.filter(
      (x) => x.email === email && x.password === password
    );
    console.log(match, "matchdata");
    if (match.length > 0) {
      alert("successful login");
      setLoginInfo(true);

      Navigate("/plan");
    } else if (email === "") {
      SetEerror("Email is required");
    } else if (password === "") {
      setPassrror("password is required");
      SetEerror("");
    } else {
      //  alert("You are not Registered ,register first");
      toast.error("You are not registered!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setPassrror("");
    }
  }
  return (
    <>
      <div className={style.contain}>
        <img
          className={style.logo}
          src={
            "data:image/png;base64,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"
          }
        />
        <div className={style.main}>
          <h2 style={{ color: "white" }}>Sign In</h2>
          <input
            className={style.input}
            type="email"
            placeholder="Email"
            onChange={HandleEmail}
          />

          <h6 style={{ color: "yellow", marginLeft: "2rem" }}>{Eerror}</h6>
          {/* <div> */}
          <input
            className={style.password}
            type="password"
            placeholder="password"
            onChange={HandlePass}
          />
          {/* </div> */}
          <h6 style={{ color: "yellow", marginLeft: "2rem" }}>{Perror}</h6>
          <div className={style.button}>
            <button onClick={HandleLogin}>Sign up</button>
          </div>
          <br />
          <div className={style.link}>
            <p>
              New to Movieflix?<Link to="/register">SignUpNow</Link>
            </p>
            <br />
            <p>
              This page is protected by Google <br />
              reCAPTCHA to ensure you're not a bot.
            </p>
          </div>
        </div>
        <Footer />
      </div>
      <ToastContainer />
    </>
  );
}
