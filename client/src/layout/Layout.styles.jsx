import { css } from '@emotion/core';

export const getLayoutStyles = (clean) => css`
  width: 100%;
  height: 100vh;
  padding-top: ${clean ? '0px' : '85px'};
  overflow-x: hidden;
  overflow-y: auto;
`;
