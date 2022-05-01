const axios = require('axios').default;

module.exports = async (req, res) => {
  const apiUrl = 'https://icanhazdadjoke.com';
  const requestHeaders = {
    Accept: 'application/json',
    'User-Agent': 'React Tailwind Vercel Starter Template (Example Serverless Function)',
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
  res.setHeader('Cache-Control', 'max-age=600, s-maxage=600');
  return res.status(200).json(returnData);
};
