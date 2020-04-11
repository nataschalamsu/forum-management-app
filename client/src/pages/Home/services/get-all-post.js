import axios from 'axios';
import { URLs } from '../../../config';

const { FORUM_URL } = URLs;

export default async () => {
  const response = await axios(`${FORUM_URL}/post`, {
    method: 'GET',
    headers: {
      token: localStorage.getItem('_token'),
    },
  });

  return response.data;
};