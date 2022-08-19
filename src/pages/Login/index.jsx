import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button, InputText } from "../../components";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import axios from "axios";

const Login = ({ setUpdateNav }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    const testName = "test";
    const testPass = "test";

    axios
      .post("https://fp-mental-health.herokuapp.com/login", {
        username: username,
        password: password,
      })
      .then(function (response) {
        console.log(response);
        const userToken = response.data.access_token;
        localStorage.setItem("token", userToken);
        localStorage.setItem("user_id", response.data.user_id);
        localStorage.setItem("username", response.data.username);
      })
      .catch(function (error) {
        console.log(error);
      });
    setTimeout(() => {
      navigate("/");
      setUpdateNav((prev) => prev + 1);
    }, 1000);
  };

  return (
    <>
      <div className={styles.container}>
        <div>
        <h1 className={styles.welc} role="h1">
            Welcome Back
          </h1>
          <h1 className={styles.loginh1} role="h1">
            Login
          </h1>
          <form onSubmit={handleSubmit} action="" method="POST">
            <InputText
              type="text"
              label="Username"
              placeholder="Username.."
              id="username"
              className={styles.inputField}
            />
            <InputText
              type="password"
              label="Password"
              placeholder="Password.."
              id="password"
              className={styles.inputField}
            />
            <Button id={styles.loginBtn} type="submit" value="Login" />
          </form>

          <span className={styles.noAccountText}>
            Don't have an account?
            <br />
            <NavLink to="/register">Sign Up now</NavLink>
          </span>

          <Button
            id={styles.aboutBtn}
            type="button"
            value="What This App Is About"
            funct={() => {
              console.log("lol");
              navigate("/about");
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Login;
