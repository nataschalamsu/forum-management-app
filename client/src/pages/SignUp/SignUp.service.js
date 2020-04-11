import axios from 'axios';
import { URLs } from '../../config';

const { USER_URL } = URLs;

export default async (data) => {
  const response = await axios(`${USER_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  });

  return response;
};