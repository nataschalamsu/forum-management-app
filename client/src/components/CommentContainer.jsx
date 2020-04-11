/** @jsx jsx */
import { jsx } from '@emotion/core';
import { commentWrapperStyles, displayNameStyles, commentStyles } from './CommentContainer.styles';

const CommentContainer = ({ comment }) => {
  const {
    comment: userComment,
    user,
  } = comment;

  const displayName = !user ? 'Unknown' : `${user.firstName} ${user.lastName}`;

  return (
    <div css={commentWrapperStyles}>
      <p css={displayNameStyles}>{displayName}</p>
      <span css={commentStyles}>{userComment}</span>
    </div>
  );
};

export default CommentContainer;
