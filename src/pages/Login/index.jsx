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
      <h1>Login</h1>
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
        <Button type="submit" value="Login" onclick={handleSubmit} />
      </form>
      <div>
        <h3>Don't have an account?</h3>
        <NavLink to="/register">Sign Up now</NavLink>
      </div>
<<<<<<< HEAD
      <NavLink to="/about">
      <Button type="button" value="What This App Is About" />
      </NavLink>
=======
      <Button
        type="button"
        value="What This App Is About"
        onclick={() => {
          navigate('/about');
        }}
      />
>>>>>>> c2bce885eae3d1c730047175b931d45c594f5c2f
    </div>
  );
};

export default Login;
