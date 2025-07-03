import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { NextApiRequest, NextApiResponse } from "next";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

interface DashboardProps {
  user: {
    id: string;
    email: string;
    given_name: string;
    family_name: string;
  } | null;
}

export default function Dashboard({ user }: DashboardProps) {
  return (
    <div className="container">
      <div className="card start-hero">
        <p className="text-body-2 start-hero-intro">Woohoo!</p>
        <p className="text-display-2">
          Your authentication is all sorted.
          <br />
          Build the important stuff.
        </p>
        {user && (
          <div style={{ marginTop: '20px', padding: '10px', borderRadius: '5px' }}>
            <p><strong>Server-side user data:</strong></p>
            <p>Name: {user.given_name} {user.family_name}</p>
            <p>Email: {user.email}</p>
            <p>ID: {user.id}</p>
          </div>
        )}
      </div>
      <section className="next-steps-section">
        <h2 className="text-heading-1">Next steps for you</h2>
      </section>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const { getUser, isAuthenticated } = getKindeServerSession(
    context.req as NextApiRequest, 
    context.res as NextApiResponse
  );

  if (!(await isAuthenticated())) {
    return {
      redirect: {
        destination: "/api/auth/login",
        permanent: false,
      },
    };
  }

  const user = await getUser();

  return {
    props: {
      user: user ? {
        id: user.id,
        email: user.email || '',
        given_name: user.given_name || '',
        family_name: user.family_name || '',
      } : null,
    },
  };
};
