import { css } from '@emotion/core';

export const signUpPageStyles = css`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const signUpFormWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  margin: 10px 0;
`;

export const inputStyles = css`
  width: 200px;
  padding: 10px;
  border: 1px solid lightgrey;
  border-radius: 50px;
  margin-bottom: 10px;
  outline: none;
`;

export const buttonStyles = css`
  width: 100px;
  padding: 10px;
  background-color: #61dafb;
  color: #000;
  border: none;
  border-radius: 50px;
  font-weight: bold;
  outline: none;

  :hover {
    background-color: #a0e8fc;
    color: #666;
  }
`;

export const welcomeTitle = css`
  font-weight: bold;
  font-size: 20px;
  margin: 0 0 10px 0;
`;

export const textStyles = css`
  font-size: 12px;
`;

export const linkStyles = css`
  color: black;
  font-weight: bold;
  text-decoration: none;
`;