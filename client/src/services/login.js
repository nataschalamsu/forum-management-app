import axios from 'axios';
import { URLs } from '../config';

const { USER_URL } = URLs;

export default async (email, password) => {
  const response = await axios(`${USER_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      email,
      password,
    },
  });

  return response.data;
};