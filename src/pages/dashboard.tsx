import { GetServerSideProps, NextApiRequest, NextApiResponse, GetServerSidePropsContext } from "next";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

interface DashboardProps {
  user: {
    id: string;
    email: string;
    given_name: string;
    family_name: string;
  } | null;
}

export default function Dashboard() {
  return (
    <div className="container">
      <div className="card start-hero">
        <p className="text-body-2 start-hero-intro">Woohoo!</p>
        <p className="text-display-2">
          Your authentication is all sorted.
          <br />
          Build the important stuff.
        </p>
      </div>
      <section className="next-steps-section">
        <h2 className="text-heading-1">Next steps for you</h2>
      </section>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const { getUser } = getKindeServerSession(
    context.req as NextApiRequest,
    context.res as NextApiResponse
  );

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