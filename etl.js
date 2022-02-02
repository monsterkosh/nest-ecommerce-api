const axios = require('axios').default;

(async () => {
  const {
    data: { token },
  } = await axios.post('http://localhost:3000/auth/login', {
    username: 'username',
    password: 'password',
  });

  try {
    const { data } = await axios.get('http://localhost:3000/auth', {
      headers: { authorization: `Bearer ${token}` },
    });

    console.log(data);
  } catch (error) {
    console.log('Auth error:');
  }
})();
