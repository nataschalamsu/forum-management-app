/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Layout from '../../layout/Layout';
import { buttonStyles, signUpPageStyles, signUpFormWrapper, inputStyles } from './SignUp.styles';

const SignUp = () => {
  return (
    <Layout clean>
      <div css={signUpPageStyles}>
        <h2>Welcome</h2>
        <span>Sign Up</span>
        <div css={signUpFormWrapper}>
          <input css={inputStyles} type="text" name="firstName" id="firstName" placeholder="First Name" />
          <input css={inputStyles} type="text" name="lastName" id="lastName" placeholder="Last Name" />
          <input css={inputStyles} type="text" name="email" id="email" placeholder="Email" />
          <input css={inputStyles} type="password" name="password" id="password" placeholder="Password" />
          <button css={buttonStyles} type="submit">Sign Up</button>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;