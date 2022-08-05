import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, InputText } from '../../components';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div>
      <h1 role="h1">Login</h1>
      <form action="" method="POST">
        <InputText
          type="text"
          name="Username"
          value="Enter Username.."
          id="login-username"
        />
        <InputText
          type="text"
          name="Password"
          value="Enter Password.."
          id="login-password"
        />
        <Button type="submit" value="Login" onClick={handleSubmit} />
      </form>
      <div>
        <h3>Don't have an account?</h3>
        <NavLink to="/register">Sign Up now</NavLink>
      </div>
      <Button
        type="button"
        value="What This App Is About"
        onClick={() => {
          navigate('/about');
        }}
      />
    </div>
  );
};

export default Login;
