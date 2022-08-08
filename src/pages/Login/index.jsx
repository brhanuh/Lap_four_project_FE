import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, InputText } from '../../components';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
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
            id="login-username"
          />
          <InputText
            type="text"
            label="Password"
            placeholder="Enter Password.."
            id="login-password"
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
            console.log('lol');
            navigate('/about');
          }}
        />
      </div>
    </div>
  );
};

export default Login;
