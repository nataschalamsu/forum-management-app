/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useEffect, useState } from 'react';
import Layout from '../../layout/Layout';
import { homePageStyles, postWrapperStyles, contentWrapperStyles, titleStyles } from './Home.styles';
import getAllPost from './services/get-all-post';

const Home = () => {
  const [allPost, setPost] = useState(null);
  const [isLoading, setLoadingStatus] = useState(true);
  const fetchForumPost = async() => {
    const data = await getAllPost();
    console.log(data);
    setPost(data);
    setLoadingStatus(false);
  };

  useEffect(() => {
    fetchForumPost();
  }, []);

  if(isLoading) return 'Loading...';

  return (
    <Layout childStyles={homePageStyles}>
      <div css={postWrapperStyles}>
        {allPost.map(post => (
          <div css={contentWrapperStyles}>
            <p css={titleStyles}>{post.title}</p>
            <span>{post.content}</span>
          </div>
        ))}
      </div>
    </Layout>
  ); 
};

export default Home;