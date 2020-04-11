/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import AppContext from '../App.context';
import { displayNameStyles, headerStyles, logoutBtnStyles, navigationMenuWrapperStyles, navigationMenuStyles, linkStyles } from './Header.styles';

const navBarMenu = {
  home: {
    name: 'Home',
    link: '/',
  },
  myPost: {
    name: 'My Post',
    link: '/my-post'
  },
  createPost: {
    name: 'Create Post',
    link: '/create'
  },
};

const Header = () => {
  const { logout, userInfo } = useContext(AppContext);
  const { firstName, lastName } = userInfo;

  return (
    <div css={headerStyles}>
      <span css={displayNameStyles}>THE FORUM</span>
      <div css={navigationMenuWrapperStyles}>
        {Object.keys(navBarMenu).map(key => (
          <div css={navigationMenuStyles}>
            <NavLink to={navBarMenu[key].link} css={linkStyles}>{navBarMenu[key].name}</NavLink>
          </div>
        ))}
        <button type="button" css={logoutBtnStyles} onClick={() => {}}>Logout</button>
      </div>
    </div>
  );
};

export default Header;
