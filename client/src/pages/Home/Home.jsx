/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useEffect, useState } from 'react';
import Layout from '../../layout/Layout';
import { homePageStyles } from './Home.styles';
import getAllPost from './Home.services';

const Home = () => {
  const [allPost, setPost] = useState(null);
  const fetchForumPost = async() => {
    const data = await getAllPost();
    console.log(data);
    setPost(data);
  };

  useEffect(() => {
    fetchForumPost();
  }, [])
  return (
    <Layout childStyles={homePageStyles}>
      <div>
        Home
      </div>
    </Layout>
  ); 
};

export default Home;