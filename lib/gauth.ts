// 'use server';

import { OAuth2Client } from 'google-auth-library';
import { readEnv } from '@/lib/auth';

export const oAuth2Client = new OAuth2Client(
  readEnv('GOOGLE_CLIENT_ID'),
  readEnv('GOOGLE_CLIENT_SECRET'),
  readEnv('GOOGLE_REDIRECT_URI')
);
