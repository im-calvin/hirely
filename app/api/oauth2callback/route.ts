import { oAuth2Client } from '@/lib/gauth';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');
    if (!code) {
      return new Response('Invalid code', {
        status: 400
      });
    }

    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokens);
    // Here you might want to save the tokens in the session or a database

    // res.redirect('/profile'); // Redirect to a profile page, or wherever you need
  } catch (error) {
    console.error('Failed to handle the OAuth callback', error);
    return new Response('Authentication failed', {
      status: 500
    });
  }
}
