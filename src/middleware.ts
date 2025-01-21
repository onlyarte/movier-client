import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const sessionToken =
    request.cookies.get('next-auth.session-token')?.value ||
    request.cookies.get('__Secure-next-auth.session-token')?.value;

  if (sessionToken) {
    request.headers.set('Authorization', `Bearer ${btoa(sessionToken)}`);
  }

  const oldUrl = new URL(request.url);

  return NextResponse.rewrite(
    (process.env.API_URL as string) +
      oldUrl.pathname.replace('/api', '') +
      oldUrl.search,
    {
      request,
    }
  );
}

export const config = {
  matcher: ['/api/graphql', '/api/upload', '/api/search'],
};
