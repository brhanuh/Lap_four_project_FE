import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, InputText } from "../../components";
import Layout from "../../layout";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    axios
      .post("https://fp-mental-health.herokuapp.com/register", {
        username: username,
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    //navigate("/login");
  };

  return (
    <>
    <Layout/>
    <div className="container">
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <InputText
            type="text"
            placeholder="Enter username.."
            label="Username: "
            id="name"
          />
          <InputText
            type="email"
            placeholder="Enter Email.."
            label="Email: "
            id="email"
          />
          <InputText
            type="email"
            placeholder="Confirm Email.."
            label="Confirm Email: "
            id="confirm-email"
          />
          <InputText
            type="text"
            placeholder="Enter Password.."
            label="Password: "
            id="password"
          />
          <InputText
            type="text"
            placeholder="Confirm Password.."
            label="Confirm Password: "
            id="confirm-password"
          />
          <Button type="submit" value="Sign Up" id="signUp-btn" />
        </form>
      </div>
    </div>
    </>
  );
};

export default Register;
