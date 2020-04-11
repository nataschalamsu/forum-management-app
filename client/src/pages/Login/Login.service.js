const URL = 'localhost:3000/users'

export default async () => {
  const response = await fetch(URL + '/login', {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  console.log(response);
};