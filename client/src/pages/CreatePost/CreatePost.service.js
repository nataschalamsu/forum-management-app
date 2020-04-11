import axios from 'axios';
import { URLs } from '../../config';

const { FORUM_URL } = URLs;

export default async (data) => {
  const response = await axios(`${FORUM_URL}/create-post`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      token: localStorage.getItem('_token'),
    },
    data,
  });

  return response;
};