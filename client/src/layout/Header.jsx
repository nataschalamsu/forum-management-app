/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useContext } from 'react';

import AppContext from '../App.context';
import { displayNameStyles, headerStyles, logoutBtnStyles } from './Header.styles';

const Header = () => {
  const { logout, userInfo } = useContext(AppContext);
  const { display_name: displayName } = userInfo;

  return (
    <div css={headerStyles}>
      <span css={displayNameStyles}>{displayName}</span>
      <button type="button" css={logoutBtnStyles} onClick={() => logout()}>Logout</button>
    </div>
  );
};

export default Header;
