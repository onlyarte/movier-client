import { authOptions } from '@/app/auth/config';
import NextAuth from 'next-auth/next';

export default NextAuth(authOptions);
