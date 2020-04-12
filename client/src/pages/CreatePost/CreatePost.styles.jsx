/** @jsx jsx */
import { css } from '@emotion/core';

export const createPostPageStyles = css`
  display: flex;
  align-items: center;
  min-height: 100vh;
`;

export const createPostWrapper = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px 100px 0 100px;
  min-height: 100vh;

  @media only screen and (max-width: 768px) {
    padding: 25px 50px;
  }
`;

export const titleStyles = css`
  font-weight: bold;
  font-size: 14px;
`;

export const inputStyles = css`
  padding: 10px;
  margin: 20px 0;
  border-radius: 10px;
  border: 1px solid grey;
  outline: none;
`;

export const textAreaStyles = css`
  padding: 10px;
  resize: none;
  border: 1px solid grey;
  border-radius: 10px;
  overflow: auto;
  margin: 0 0 20px 0;
  outline: none;
`;

export const buttonStyles = css`
  border: none;
  border-radius: 10px;
  padding: 10px;
  background-color: #61dafb;
  font-weight: bold;
  color: black;
  outline: none;

  :hover {
    background-color: #a0e8fc;
    color: #666;
  }
`;