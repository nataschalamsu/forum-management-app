/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useEffect, useState } from 'react';
import Layout from '../../layout/Layout';
import { ContentContainer } from '../../components';

import {
  homePageStyles,
  postWrapperStyles,
} from './Home.styles';
import { getAllPost, createComment } from './services';

const Home = () => {
  const [allPost, setPost] = useState(null);
  const [isLoading, setLoadingStatus] = useState(true);

  const fetchForumPost = async () => {
    const data = await getAllPost();

    setPost(data);
    setLoadingStatus(false);
  };

  const submitComment = async (data) => {
    await createComment(data);
    await fetchForumPost();
  };

  useEffect(() => {
    fetchForumPost();
  }, []);

  if(isLoading) return 'Loading...';

  return (
    <Layout childStyles={homePageStyles}>
      <div css={postWrapperStyles}>
        {allPost.map(post => (
          <ContentContainer post={post} submitComment={submitComment} />
        ))}
      </div>
    </Layout>
  ); 
};

export default Home;