import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub]
});

// synced with .env.example
interface envKeys {
  POSTGRES_URL: string;
  NEXTAUTH_URL: string;
  AUTH_SECRET: string;
  AUTH_GITHUB_ID: string;
  AUTH_GITHUB_SECRET: string;
  GOOGLE_PROJECT_ID: string;
  GOOGLE_CLIENT_ID: string;
  GOOGLE_CLIENT_SECRET: string;
  GOOGLE_API_KEY: string;
  GOOGLE_REDIRECT_URI: string;
}

export function readEnv(key: keyof envKeys) {
  const env = process.env[key];
  if (env) {
    return env;
  } else {
    throw new Error(`${key} is not found in the environment`);
  }
}
