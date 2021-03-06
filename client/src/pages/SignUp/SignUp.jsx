/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useContext, useState } from 'react';
import AppContext from '../../App.context';
import Layout from '../../layout/Layout';
import {
  buttonStyles,
  signUpPageStyles,
  signUpFormWrapper,
  inputStyles,
  welcomeTitle,
  linkStyles,
  textStyles,
} from './SignUp.styles';

const SignUp = () => {
  const { submitSignUp } = useContext(AppContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeFirstName = (value) => {
    setFirstName(value);
  };

  const handleChangeLastName = (value) => {
    setLastName(value);
  };

  const handleChangeEmail = (value) => {
    setEmail(value);
  };

  const handleChangePassword = (value) => {
    setPassword(value);
  };

  const onSubmit = () => {
    const data = {
      firstName,
      lastName,
      email,
      password,
    };

    submitSignUp(data);
  };

  return (
    <Layout clean>
      <div css={signUpPageStyles}>
        <p css={welcomeTitle}>Sign Up</p>
        <div css={signUpFormWrapper}>
          <input css={inputStyles} type="text" name="firstName" id="firstName" placeholder="First Name" onChange={(e) => handleChangeFirstName(e.target.value)} />
          <input css={inputStyles} type="text" name="lastName" id="lastName" placeholder="Last Name" onChange={(e) => handleChangeLastName(e.target.value)} />
          <input css={inputStyles} type="text" name="email" id="email" placeholder="Email" onChange={(e) => handleChangeEmail(e.target.value)} />
          <input css={inputStyles} type="password" name="password" id="password" placeholder="Password" onChange={(e) => handleChangePassword(e.target.value)} />
          <button css={buttonStyles} type="submit" onClick={() => onSubmit()}>Sign Up</button>
        </div>
        <span css={textStyles}>Already have an account? <a href="/login" css={linkStyles}>Login</a></span>
      </div>
    </Layout>
  );
};

export default SignUp;