import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const envVars = {
    KINDE_CLIENT_ID: process.env.KINDE_CLIENT_ID ? 'SET' : 'NOT SET',
    KINDE_CLIENT_SECRET: process.env.KINDE_CLIENT_SECRET ? 'SET' : 'NOT SET',
    KINDE_ISSUER_URL: process.env.KINDE_ISSUER_URL ? 'SET' : 'NOT SET',
    KINDE_SITE_URL: process.env.KINDE_SITE_URL ? 'SET' : 'NOT SET',
    KINDE_POST_LOGIN_REDIRECT_URL: process.env.KINDE_POST_LOGIN_REDIRECT_URL ? 'SET' : 'NOT SET',
    KINDE_POST_LOGOUT_REDIRECT_URL: process.env.KINDE_POST_LOGOUT_REDIRECT_URL ? 'SET' : 'NOT SET',
    NODE_ENV: process.env.NODE_ENV,
    NETLIFY: process.env.NETLIFY ? 'true' : 'false',
  };

  res.status(200).json({
    message: 'Environment variables check',
    environment: envVars,
    timestamp: new Date().toISOString()
  });
} 