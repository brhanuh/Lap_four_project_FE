import React from 'react';
import { Button, InputText } from '../../components';

const Register = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <form action="" method="POST">
        <InputText
          type="text"
          value="Enter username.."
          name="Username: "
          id="name"
        />
        <InputText
          type="email"
          value="Enter Email.."
          name="Email: "
          id="email"
        />
        <InputText
          type="email"
          value="Confirm Email.."
          name="Confirm Email: "
          id="confirm-email"
        />
        <InputText
          type="text"
          value="Enter Password.."
          name="Password: "
          id="password"
        />
        <InputText
          type="text"
          value="Confirm Password.."
          name="Confirm Password: "
          id="confirm-password"
        />
        <Button type="submit" value="Sign Up" id="signUp-btn" />
      </form>
    </div>
  );
};

export default Register;
