/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useEffect, useState } from 'react';
import Layout from '../../layout/Layout';
import { ContentContainer } from '../../components';

import {
  myPostPageStyles,
  postWrapperStyles,
} from './MyPost.styles';
import { getMyPost, createComment } from './services';

const MyPost = () => {
  const [allPost, setPost] = useState(null);
  const [isLoading, setLoadingStatus] = useState(true);

  const fetchMyPost = async () => {
    const data = await getMyPost();

    setPost(data);
    setLoadingStatus(false);
  };

  const submitComment = async (data) => {
    await createComment(data);
    await fetchMyPost();
  };

  useEffect(() => {
    fetchMyPost();
  }, []);

  if(isLoading) return 'Loading...';

  return (
    <Layout childStyles={myPostPageStyles}>
      <div css={postWrapperStyles}>
        {allPost.map(post => (
          <ContentContainer post={post} submitComment={submitComment} />
        ))}
      </div>
    </Layout>
  ); 
};

export default MyPost;