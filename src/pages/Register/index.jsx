import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, InputText } from '../../components';
// can call styles whatever you want when importing it
import styles from './register.module.css';

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    axios
      .post('https://fp-mental-health.herokuapp.com/register', {
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
    <div className={styles.container}>
      <div>
        <h1 className={styles.header}>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <InputText
            type="text"
            placeholder="Enter username.."
            label="Username: "
            id="name"
            className={styles.inputField}
          />
          <InputText
            type="email"
            placeholder="Enter Email.."
            label="Email: "
            id="email"
            className={styles.inputField}
          />
          <InputText
            type="email"
            placeholder="Confirm Email.."
            label="Confirm Email: "
            id="confirm-email"
            className={styles.inputField}
          />
          <InputText
            type="text"
            placeholder="Enter Password.."
            label="Password: "
            id="password"
            className={styles.inputField}
          />
          <InputText
            type="text"
            placeholder="Confirm Password.."
            label="Confirm Password: "
            id="confirm-password"
            className={styles.inputField}
          />
          <Button type="submit" value="Sign Up" id={styles.signUpBtn} />
        </form>
      </div>
    </div>
  );
};

export default Register;
