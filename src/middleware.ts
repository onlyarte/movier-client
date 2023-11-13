import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const sessionToken =
    request.cookies.get('next-auth.session-token')?.value ||
    request.cookies.get('__Secure-next-auth.session-token')?.value;

  if (sessionToken) {
    request.headers.set('Authorization', `Bearer ${btoa(sessionToken)}`);
  }
  return NextResponse.rewrite(new URL(process.env.API_URL as string), {
    request,
  });
}

export const config = {
  matcher: '/api/graphql',
};
