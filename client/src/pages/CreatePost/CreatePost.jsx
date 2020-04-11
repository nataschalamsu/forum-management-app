/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import Layout from '../../layout/Layout';
import createPost from './CreatePost.service';
import {
  createPostPageStyles,
  createPostWrapper,
  inputStyles,
  textAreaStyles,
  titleStyles,
  buttonStyles,
} from './CreatePost.styles';


const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleChangeTitle = (value) => {
    setTitle(value);
  };

  const handleChangeContent = (value) => {
    setContent(value);
  };

  const onSubmit = async () => {
    const data = {
      title,
      content
    };

    await createPost(data);
  };

  return (
    <Layout childStyles={createPostPageStyles}>
      <div css={createPostWrapper}>
        <p css={titleStyles}>Create a Post</p>
        <input type="text" name="title" id="title" placeholder="Title" onChange={(e) => handleChangeTitle(e.target.value)} css={inputStyles} />
        <textarea name="content" id="content" cols="30" rows="10" css={textAreaStyles} placeholder="Write your content here..." onChange={(e) => handleChangeContent(e.target.value)} />
        <button type="submit" onClick={() => onSubmit()} css={buttonStyles}>Submit Post</button>
      </div>
    </Layout>
  );
};

export default CreatePost;
