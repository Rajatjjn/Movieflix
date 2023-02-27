import React, { useState, useEffect } from "react";
import Button from "../../Atoms/Button";
import Input from "../../Atoms/Input";
import Nav from "../../MainPge/Nav/Nav";
import style from "./Register.module.css";
import { emailvalidation, passvalidation, NameValidation } from "../../Helper";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { isLogin } from "../../Recoil";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const loginstatus = useSetRecoilState(isLogin);
  
  let data = JSON.parse(localStorage.getItem("email"));
  // console.log(data)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameerror, setNameerror] = useState("");
  const [emailerror, setEmailerror] = useState("");
  const [passerror, setPassError] = useState("");
  const [color, setColor] = useState("red");
  const [store, setStore] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userDetails")) {
      let data = JSON.parse(localStorage.getItem("userDetails"));
      setStore(data);
    }
  }, []);

  function HandleName(e) {
    setName(e.target.value);
    const validated = NameValidation(name);
    setNameerror(validated);
  }

  function HandleEmail(e) {
    setEmail(e.target.value);
    const validated = emailvalidation(email);
    setEmailerror(validated);
  }
  function HandlePass(e) {
    setPassword(e.target.value);
    const validated = passvalidation(password);
    setPassError(validated);
  }

  function HandleRegister() {
    if (emailerror === "true" && passerror === "true" && nameerror === "true") {
      const obj = {
        name: name,
        email: email,
        password: password,
      };
      store.push(obj);
      localStorage.setItem("userDetails", JSON.stringify(store));
      alert("successfully registered");
      loginstatus(true);
      navigate("/login");
    } else if (name === "") {
      setNameerror("please enter name");
    } else if (email === "") {
      setEmailerror("please enter email");
    } else if (password === "") {
      setPassError("please enter password");
    } else {
      // alert("please enter correct input");
      toast.error("Please enter correct input", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }

  return (
    <>
      <Nav />
      <hr />
      {/* <div style={{backgroundColor:"red"}}> */}
      <div className={style.main}>
        <h2>
          Welcome!<h6 style={{ color: "green" }}>{data}</h6>
        </h2>
        <br />
        <h3>Joining Netflix is easy.</h3>
        <br />
        <h6>Enter your details and you'll be watching in no time.</h6>
        <br />

        <Input
          type={"Name"}
          placeholder={"Enter nameor username"}
          InputCss={style.input}
          onChange={HandleName}
          value={name}
        />
        <h6>{nameerror}</h6>
        <Input
          type={"email"}
          placeholder={"Email"}
          InputCss={style.input}
          onChange={HandleEmail}
          value={email}
        />
        <h6>{emailerror}</h6>
        <Input
          type={"password"}
          placeholder={"Password"}
          InputCss={style.input}
          onChange={HandlePass}
          value={password}
        />
        <h6>{passerror}</h6>
        <Button
          text={"Register"}
          InputCss={style.btn}
          onClick={HandleRegister}
        />
      </div>
      {/* </div> */}
      <ToastContainer />
    </>
  );
}
