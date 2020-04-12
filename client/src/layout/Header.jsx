/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useContext, useState } from 'react';
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
  const { logout } = useContext(AppContext);
  const [isShowing, setShowStatus] = useState(false);

  const toggleMenu = () => {
    setShowStatus(!isShowing);
  };

  const header = headerStyles(isShowing);
  console.log(isShowing);
  return (
    <div css={header}>
      <span css={displayNameStyles}>THE FORUM</span>
      <div class="nav-menu" id="nav-menu" css={navigationMenuWrapperStyles}>
        {Object.keys(navBarMenu).map(key => (
          // <div id="nav-link" css={navigationMenuStyles(key)}>
            <NavLink id="nav-link" to={navBarMenu[key].link} css={linkStyles}>{navBarMenu[key].name}</NavLink>
          // </div>
        ))}
        <a id="logout-btn" href="javascript:void(0)" css={logoutBtnStyles} onClick={() => logout()}>Logout</a>
        <a href="javascript:void(0)" onClick={() => toggleMenu()} id="menu-toggle" css={linkStyles}>Menu</a>
      </div>
    </div>
  );
};

export default Header;
