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
  box-shadow: 0 10px 10px lightgrey;  
`;

export const logoutBtnStyles = css`
  background-color: red;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  padding: 10px;
`;

export const displayNameStyles = css`
  font-weight: bold;
`;

export const navigationMenuWrapperStyles = css`
  display: flex;
  align-items: center;
`;

export const navigationMenuStyles = css`
  padding: 10px;
`;

export const linkStyles = css`
  color: black;
  font-weight: bold;
  text-decoration: none;

  :hover {
    color: grey;
  }
`;
