// @ts-ignore
export default async (req: Request, res: Response) => {
  const apiUrl = 'https://icanhazdadjoke.com';
  const requestHeaders = {
    Accept: 'application/json',
    'User-Agent':
      'React Tailwind Vercel Starter Template (Example Serverless Function)',
  };
  const returnData = await fetch(apiUrl, {
    headers: requestHeaders,
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
      // @ts-ignore (incorrect - https://vercel.com/docs/functions/runtimes/node-js#node.js-request-and-response-objects)
      res.status(500).json(error);
    });
  // @ts-ignore (incorrect - https://vercel.com/docs/functions/runtimes/node-js#node.js-request-and-response-objects)
  res.setHeader('Cache-Control', 'max-age=600, s-maxage=600');
  // @ts-ignore (incorrect - https://vercel.com/docs/functions/runtimes/node-js#node.js-request-and-response-objects)
  res.status(200).json(returnData);
};
