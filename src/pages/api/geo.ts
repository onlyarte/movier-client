import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const backendUrl = `${process.env.API_URL}/geo`;

  // Redirect the client to the App Engine backend
  response.redirect(302, backendUrl);
}
