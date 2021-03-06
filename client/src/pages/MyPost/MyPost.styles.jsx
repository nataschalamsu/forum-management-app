/** @jsx jsx */
import { css } from '@emotion/core';

export const myPostPageStyles = css`
  display: flex;
  align-items: center;
  min-height: 100vh;
`;

export const postWrapperStyles = css`
  padding: 50px 100px 0 100px;
  min-height: 100vh;

  @media only screen and (max-width: 768px) {
    padding: 25px 50px;
  }
`;
