
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';

import emotionTypeValidator from '../helpers/emotionTypeValidator';
import Header from './Header';
import { getLayoutStyles } from './Layout.styles';

const Layout = ({ clean, children, childStyles }) => {
  const layoutStyles = getLayoutStyles(clean);

  return (
    <div css={layoutStyles}>
      {!clean && <Header />}
      <div css={childStyles}>
        {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  clean: PropTypes.bool,
  children: PropTypes.node.isRequired,
  childStyles: emotionTypeValidator,
};

Layout.defaultProps = {
  clean: false,
  childStyles: css``,
};

export default Layout;
