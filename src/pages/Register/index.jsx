import React from 'react';
import { Button, InputText } from '../../components';

const Register = () => {
  return (
    <div>
      <form action="" method="POST">
        <InputText type="text" value="enter name.." name="name: " id="name" />
        <InputText
          type="email"
          value="enter email.."
          name="email: "
          id="email"
        />
        <InputText
          type="email"
          value="confirm email.."
          name="confirm email: "
          id="confirm-email"
        />
        <InputText
          type="text"
          value="enter password.."
          name="password: "
          id="password"
        />
        <InputText
          type="text"
          value="confirm password.."
          name="confirm password: "
          id="confirm-password"
        />
        <Button type="submit" name="Register" id="register-btn" />
      </form>
    </div>
  );
};

export default Register;
