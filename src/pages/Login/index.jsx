import React from 'react';
import { Button, InputText } from '../../components';

const Login = () => {
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
        <Button type="submit" name="Login" />
      </form>
    </div>
  );
};

export default Login;
