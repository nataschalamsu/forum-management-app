/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Layout from '../../layout/Layout';
import { buttonStyles, loginPageStyles, loginFormWrapper, inputStyles } from './Login.styles';

const Login = () => {
  return (
    <Layout clean>
      <div css={loginPageStyles}>
        <h2>Welcome to Forum</h2>
        <span>Login</span>
        <div css={loginFormWrapper}>
          <input css={inputStyles} type="text" name="email" id="email" placeholder="Email"  />
          <input css={inputStyles} type="password" name="password" id="password" placeholder="Password"  />
          <button css={buttonStyles} type="submit">Login</button>
        </div>
      </div>
    </Layout>
  );
};

export default Login;