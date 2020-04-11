/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';
import Layout from '../../layout/Layout';
import login from './Login.service';
import { buttonStyles, loginPageStyles, loginFormWrapper, inputStyles } from './Login.styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (value) => {
    console.log(value)
    setEmail(value);
  };

  const handleChangePass = (value) => {
    console.log(value);
    setPassword(value);
  };

  const submitLogin = async () => {
    await login(email, password);
  };

  return (
    <Layout clean>
      <div css={loginPageStyles}>
        <h2>Welcome to Forum</h2>
        <span>Login</span>
        <div css={loginFormWrapper}>
          <input css={inputStyles} type="text" name="email" id="email" placeholder="Email" onChange={(e) => handleChangeEmail(e.target.value)} />
          <input css={inputStyles} type="password" name="password" id="password" placeholder="Password" onChange={(e) => handleChangePass(e.target.value)} />
          <button css={buttonStyles} type="submit" onClick={() => submitLogin()}>Login</button>
        </div>
      </div>
    </Layout>
  );
};

export default Login;