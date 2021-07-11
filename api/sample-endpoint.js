const axios = require('axios').default;

module.exports = async (req, res) => {
  const apiUrl = 'https://icanhazdadjoke.com';
  const requestHeaders = {
    Accept: 'application/json',
  };
  const returnData = await axios
    .get(apiUrl, {
      headers: requestHeaders,
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return res.status(500).json(error);
    });
  return res.status(200).json(returnData);
};
