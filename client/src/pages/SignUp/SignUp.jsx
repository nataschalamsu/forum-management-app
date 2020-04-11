/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import Layout from '../../layout/Layout';
import { buttonStyles, signUpPageStyles, signUpFormWrapper, inputStyles } from './SignUp.styles';
import signUp from './SignUp.service';

const SignUp = () => {
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

  const submitSignUp = async () => {
    const data = {
      firstName,
      lastName,
      email,
      password,
    };

    await signUp(data);
  };

  return (
    <Layout clean>
      <div css={signUpPageStyles}>
        <h2>Welcome</h2>
        <span>Sign Up</span>
        <div css={signUpFormWrapper}>
          <input css={inputStyles} type="text" name="firstName" id="firstName" placeholder="First Name" onChange={(e) => handleChangeFirstName(e.target.value)} />
          <input css={inputStyles} type="text" name="lastName" id="lastName" placeholder="Last Name" onChange={(e) => handleChangeLastName(e.target.value)} />
          <input css={inputStyles} type="text" name="email" id="email" placeholder="Email" onChange={(e) => handleChangeEmail(e.target.value)} />
          <input css={inputStyles} type="password" name="password" id="password" placeholder="Password" onChange={(e) => handleChangePassword(e.target.value)} />
          <button css={buttonStyles} type="submit" onClick={() => submitSignUp()}>Sign Up</button>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;