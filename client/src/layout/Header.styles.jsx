import { css } from '@emotion/core';

export const headerStyles = css`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 85px;
  background-color: #fff;
  padding: 15px 50px;
  z-index: 500;
  border-bottom: 5px solid black;
`;

export const logoutBtnStyles = css`
  background-color: red;
  border: 5px solid black;
  border-radius: 50px;
  color: white;
  font-weight: bold;
  padding: 10px;
`;

export const displayNameStyles = css`
  font-weight: bold;
`;
