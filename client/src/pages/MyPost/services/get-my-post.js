import axios from 'axios';
import { URLs } from '../../../config';

const { USER_URL } = URLs;

export default async () => {
  const response = await axios(`${USER_URL}`, {
    method: 'GET',
    headers: {
      token: localStorage.getItem('_token'),
    },
  });

  return response.data.post;
};