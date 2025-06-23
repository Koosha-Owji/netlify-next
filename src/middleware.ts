// ts-nocheck
import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

export default withAuth(
  async function middleware(req) {
    // Optional: Add logging to see authentication state
    console.log("Authentication state:", req.kindeAuth);
    
    // Optional: Add custom logic here for additional authorization checks
    // For example, you could check user roles, permissions, etc.
  },
  {
    // Redirect users back to the page they were trying to access after login
    isReturnToCurrentPage: true,
    
    // Define custom login page (optional - defaults to /api/auth/login)
    loginPage: "/api/auth/login",
    
    // Define public paths that don't require authentication
    publicPaths: [
      "/", 
      "/api/public",
      "/api/auth/login",
      "/api/auth/register",
      "/about", // Add any other public pages you have
    ],
    
    // Optional: Define custom authorization logic
    // isAuthorized: ({ token }) => {
    //   // Example: Check if user has specific permissions
    //   // return token?.permissions?.includes("access:dashboard");
    //   return true; // For now, any authenticated user is authorized
    // }
  }
);

export const config = {
  matcher: [
    // Protect specific routes
    "/dashboard/:path*",
    "/admin/:path*",
    "/profile/:path*",
    "/api/protected/:path*",
    
    // Alternative: Protect everything except Next.js internals, static files, and public paths
    // "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ]
};
