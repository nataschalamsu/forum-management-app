/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import CommentContainer from './CommentContainer';
import {
  contentWrapperStyles,
  titleStyles,
  commentWrapperStyles,
  buttonStyles,
  textAreaStyles,
  commentContainerStyles,
  commentTitleStyles,
  textStyles,
} from './ContentContainer.styles';

const ContentContainer = ({ post, submitComment }) => {
  const [commentValue, setComment] = useState('');
  const [isLoading, setLoadingStatus] = useState(false);
  const {
    _id,
    title,
    content,
    comments,
  } = post;

  const handleChangeComment = (value) => {
    setComment(value);
  };

  const onSubmit = () => {
    setLoadingStatus(true);
    const data = {
      comment: commentValue,
      id: _id,
    };

    submitComment(data);
    setComment('');
    setLoadingStatus(false);
  };

  return (
    <div css={contentWrapperStyles}>
      <p css={titleStyles}>{title}</p>
      <span css={textStyles}>{content}</span>
      {comments.length !== 0 && (
        <div css={commentContainerStyles}>
          <p css={commentTitleStyles}>Comments</p>
          {comments.map(c => (
            <CommentContainer comment={c} />
          ))}
        </div>
      )}
      <div css={commentWrapperStyles}>
        <textarea name="comment" id="comment" cols="30" rows="5" css={textAreaStyles} placeholder="Write your comment..." onChange={(e) => handleChangeComment(e.target.value)}/>
        <button css={buttonStyles} onClick={() => onSubmit()}>{isLoading ? 'Loading..' : 'Comment'}</button>
      </div>
    </div>
  );
};

export default ContentContainer;