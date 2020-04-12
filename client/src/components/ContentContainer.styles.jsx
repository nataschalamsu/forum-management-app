/** @jsx jsx */
import { css } from '@emotion/core';

export const contentWrapperStyles = css`
  border-radius: 10px;
  background-color: white;
  margin: 0 0 30px 0;
  padding: 20px;
  box-shadow: 0 0 15px lightgrey;  
`;

export const titleStyles = css`
  font-weight: bold;
  font-size: 16px;
  margin: 0 0 10px 0;
`;

export const contentHeader = css`
  margin: 0 0 10px 0;
`;

export const postedByStyles = css`
  margin: 10px 0;
  font-size: 12px;
`;

export const displayNameStyles = css`
  font-weight: bold;
`;

export const textStyles = css`
  line-height: 1.6em;
`;

export const commentContainerStyles = css`
  width: 100%;
  margin: 10px 0 0 0;
`;

export const commentTitleStyles = css`
  font-weight: bold;
`;

export const commentWrapperStyles = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: centerl
`;

export const textAreaStyles = css`
  padding: 10px;
  resize: none;
  border: 1px solid lightgrey;
  border-radius: 10px;
  overflow: auto;
  margin: 10px 0 20px 0;
  outline: none;
`;

export const buttonStyles = css`
  display: block;
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