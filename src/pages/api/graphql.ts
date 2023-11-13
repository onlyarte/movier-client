import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const sessionToken =
    request.cookies['next-auth.session-token'] ||
    request.cookies['__Secure-next-auth.session-token'];

  const apiResponse = await fetch(process.env.API_URL as string, {
    method: 'POST',
    body: JSON.stringify(request.body),
    headers: {
      Authorization: sessionToken ? `Bearer ${btoa(sessionToken)}` : '',
      'Content-Type': 'application/json',
    },
  });
  const apiResponseData = await apiResponse.text();

  response
    .status(200)
    .setHeader('Content-Type', 'application/graphql')
    .send(apiResponseData);
}
