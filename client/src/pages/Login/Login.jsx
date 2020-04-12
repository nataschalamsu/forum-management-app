/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import AppContext from '../../App.context';

import Layout from '../../layout/Layout';
import {
  buttonStyles,
  loginPageStyles,
  loginFormWrapper,
  inputStyles,
  welcomeTitle,
  textStyles,
  linkStyles,
} from './Login.styles';

const Login = () => {
  const history = useHistory();
  const { submitLogin } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (value) => {
    setEmail(value);
  };

  const handleChangePass = (value) => {
    setPassword(value);
  };

  const onSubmit = async () => {
    const data = {
      email,
      password,
    };

    await submitLogin(data);
    history.push('/');
  };

  return (
    <Layout clean>
      <div css={loginPageStyles}>
        <p css={welcomeTitle}>Login</p>
        <div css={loginFormWrapper}>
          <input css={inputStyles} type="text" name="email" id="email" placeholder="Email" onChange={(e) => handleChangeEmail(e.target.value)} />
          <input css={inputStyles} type="password" name="password" id="password" placeholder="Password" onChange={(e) => handleChangePass(e.target.value)} />
          <button css={buttonStyles} type="submit" onClick={() => onSubmit()}>Login</button>
        </div>
        <span css={textStyles}>Don't have any account? <a href="/signup" css={linkStyles}>Sign Up</a></span>
      </div>
    </Layout>
  );
};

export default Login;