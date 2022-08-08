import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, InputText } from '../../components';

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hs');
    navigate('/login');
  };

  return (
    <div className="container">
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit} action="" method="POST">
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
  );
};

export default Register;
