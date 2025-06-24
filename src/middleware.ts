// ts-nocheck
import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

export default withAuth(async function middleware(req) {
  console.log('🚀 MIDDLEWARE EXECUTING:', req.nextUrl.pathname);
  console.log('🌍 Environment check:', {
    hasWindow: typeof window !== 'undefined',
    hasDeno: typeof (globalThis as any).Deno !== 'undefined',
    hasProcess: typeof process !== 'undefined'
  });
  return; // Let withAuth handle the rest
}, {
  publicPaths: ["/", "/api/public", "/api/auth", "/api/test-env"],
});

export const config = {
  matcher: [
    // Run on everything but Next internals and static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};
