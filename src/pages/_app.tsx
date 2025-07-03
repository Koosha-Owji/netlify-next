import { AppProps } from "next/app";
import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <KindeProvider>
      <AppContent Component={Component} pageProps={pageProps} router={router} />
    </KindeProvider>
  );
}

function AppContent({ Component, pageProps }: AppProps) {
  const { user, isAuthenticated, isLoading, error } = useKindeAuth();

  // DEBUG: Let's see what's happening
  console.log("🔍 DEBUG AUTH STATE:", {
    isAuthenticated,
    isLoading,
    error,
    user,
    hasUser: !!user,
    userName: user?.given_name
  });

  if (isLoading) {
    return <div>Loading authentication...</div>;
  }

  return (
    <>
      <header>
        <nav className="nav container">
          <h1 className="text-display-3">KindeAuth</h1>
          <div>
            {/* DEBUG: Show current auth state */}
            <small style={{marginRight: '10px', color: '#666'}}>
              Auth: {isAuthenticated ? '✅ YES' : '❌ NO'} | 
              Loading: {isLoading ? 'YES' : 'NO'} | 
              User: {user?.given_name || 'None'}
            </small>
            
            {!isAuthenticated ? (
              <>
                <LoginLink className="btn btn-ghost sign-in-btn">
                  Sign in
                </LoginLink>
                <RegisterLink className="btn btn-dark">Sign up</RegisterLink>
              </>
            ) : (
              <div className="profile-blob">
                {user?.picture ? (
                  <img
                    className="avatar"
                    src={user?.picture}
                    alt="user profile avatar"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="avatar">
                    {user?.given_name?.[0]}
                    {user?.family_name?.[0]}
                  </div>
                )}
                <div>
                  <p className="text-heading-2">
                    {user?.given_name} {user?.family_name}
                  </p>
                  <LogoutLink className="text-subtle">Log out</LogoutLink>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer className="footer">
        <div className="container">
          <strong className="text-heading-2">KindeAuth</strong>
          <p className="footer-tagline text-body-3">
            Visit our{" "}
            <Link className="link" href="https://kinde.com/docs">
              help center
            </Link>
          </p>
          <small className="text-subtle">
            © 2023 KindeAuth, Inc. All rights reserved
          </small>
        </div>
      </footer>
    </>
  );
}

export default MyApp;
