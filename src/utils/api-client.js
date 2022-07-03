const apiURL = process.env.REACT_APP_API_URL;

async function client(endpoint, { data } = {}) {
  const config = {
    method: data ? "POST" : "GET",
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_TEST_SECRET_KEY}`,
    },
  };

  return window
    .fetch(`${apiURL}/${endpoint}`, config)
    .then(async (response) => {
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
}

export { client };
