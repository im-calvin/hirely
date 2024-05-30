import { oAuth2Client } from '@/lib/gauth';
import { redirect } from 'next/navigation';

const scope = 'https://www.googleapis.com/auth/gmail.readonly';

export async function GET() {
  const authorizeUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    redirect_uri: 'http://localhost:8080',
    scope
  });

  return redirect(authorizeUrl); // get user to verify
}
