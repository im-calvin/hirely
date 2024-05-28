'use server';

import { OAuth2Client } from 'google-auth-library';
import { readEnv } from '@/lib/auth';

export async function googleSignIn() {
  const oAuth2Client = new OAuth2Client({
    clientId: readEnv('GOOGLE_CLIENT_ID'),
    clientSecret: readEnv('GOOGLE_CLIENT_SECRET'),
    redirectUri: readEnv('GOOGLE_REDIRECT_URI')
  });

  const authorizeUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: 'https://www.googleapis.com/auth/gmail.readonly'
  });

  console.log(authorizeUrl);
}
