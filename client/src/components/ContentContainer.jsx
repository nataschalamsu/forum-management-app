/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import CommentContainer from './CommentContainer';
import { contentWrapperStyles, titleStyles, commentWrapperStyles, buttonStyles, textAreaStyles, commentContainerStyles, commentTitleStyles } from './ContentContainer.styles';

const ContentContainer = ({ post, submitComment }) => {
  const [commentValue, setComment] = useState('');
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
    const data = {
      comment: commentValue,
      id: _id,
    };

    submitComment(data);
    setComment('');
  };

  return (
    <div css={contentWrapperStyles}>
      <p css={titleStyles}>{title}</p>
      <span>{content}</span>
      {comments.length !== 0 && (
        <div css={commentContainerStyles}>
          <p css={commentTitleStyles}>Comments</p>
          {comments.map(c => (
            <CommentContainer comment={c} />
          ))}
        </div>
      )}
      <div css={commentWrapperStyles}>
        <textarea name="comment" id="comment" cols="30" rows="10" css={textAreaStyles} placeholder="Write your comment..." onChange={(e) => handleChangeComment(e.target.value)}/>
        <button css={buttonStyles} onClick={() => onSubmit()}>Comment</button>
      </div>
    </div>
  );
};

export default ContentContainer;