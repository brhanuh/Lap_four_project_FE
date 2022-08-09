import React from "react";
import { NavLink } from "react-router-dom";
import { Button, InputText } from "../../components";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import axios from "axios";
import Layout from '../../layout'

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    const testName = "test";
    const testPass = "test";

    axios
      .post("https://fp-mental-health.herokuapp.com/token", {
        username: testName,
        password: testPass,
      })
      .then(function (response) {
        console.log(response);
        const userToken = response.data.access_token;
        localStorage.setItem("token", userToken);
      })
      .catch(function (error) {
        console.log(error);
      });
    //navigate("/home");
  };

  return (
    <>
     <Layout/>
    <div className={styles.container}>
      <div>
        <h1 className={styles.loginh1} role="h1">
          Login
        </h1>
        <form onSubmit={handleSubmit} action="" method="POST">
          <InputText
            type="text"
            label="Username"
            placeholder="Enter Username.."
            id="username"
          />
          <InputText
            type="password"
            label="Password"
            placeholder="Enter Password.."
            id="password"
          />
          <Button id="login-btn" type="submit" value="Login" />
        </form>
        <div>
          <h3>Don't have an account?</h3>
          <NavLink to="/register">Sign Up now</NavLink>
        </div>
        <Button
          id="about-btn"
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
