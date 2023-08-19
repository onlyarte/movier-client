import { getAccessToken } from '@auth0/nextjs-auth0';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const response = new NextResponse();
  let accessToken;
  try {
    ({ accessToken } = await getAccessToken(request, response));
  } catch (error) {
    console.error(error);
  }
  const apiResponse = await fetch(process.env.API_URL as string, {
    method: 'POST',
    body: await request.text(),
    headers: {
      'Content-Type': 'application/json',
      ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    },
  });
  return NextResponse.json(await apiResponse.json(), response);
}
