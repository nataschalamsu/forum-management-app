/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../../App.context';

import Layout from '../../layout/Layout';
import { buttonStyles, loginPageStyles, loginFormWrapper, inputStyles } from './Login.styles';

const Login = () => {
  const history = useHistory();
  const { authenticated, submitLogin } = useContext(AppContext);
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

  useEffect(() => {
    if (authenticated) { history.push('/') }
  });

  return (
    <Layout clean>
      <div css={loginPageStyles}>
        <h2>Welcome to Forum</h2>
        <span>Login</span>
        <div css={loginFormWrapper}>
          <input css={inputStyles} type="text" name="email" id="email" placeholder="Email" onChange={(e) => handleChangeEmail(e.target.value)} />
          <input css={inputStyles} type="password" name="password" id="password" placeholder="Password" onChange={(e) => handleChangePass(e.target.value)} />
          <button css={buttonStyles} type="submit" onClick={() => onSubmit()}>Login</button>
        </div>
      </div>
    </Layout>
  );
};

export default Login;