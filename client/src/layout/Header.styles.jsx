import { css } from '@emotion/core';

export const headerStyles = (isShowing) => css`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #fff;
  padding: 15px 50px;
  z-index: 500;
  box-shadow: 0 10px 10px lightgrey;

  #menu-toggle {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    #nav-menu {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    #nav-link, #logout-btn {
      display: ${isShowing ? 'flex' : 'none'};
      margin: 10px 0;
    }

    #menu-toggle {
      display: flex;
      margin: 10px 0;
    }
  }
`;

export const logoutBtnStyles = css`
  color: red;
  font-weight: bold;
  text-decoration: none;
`;

export const displayNameStyles = css`
  font-weight: bold;
`;

export const navigationMenuWrapperStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const navigationMenuStyles = css`
  padding: 10px;
`;

export const linkStyles = css`
  color: black;
  font-weight: bold;
  text-decoration: none;
  margin: 0 10px 0 10px;

  :hover {
    color: grey;
  }
`;
