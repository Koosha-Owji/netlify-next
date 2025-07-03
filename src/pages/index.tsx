import Link from "next/link";
import { GetServerSideProps } from "next";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextApiRequest, NextApiResponse } from "next";

export default function Home() {
  return (
    <div className="container">
      <div className="card hero">
        <p className="text-display-1 hero-title">
          Let's start authenticating <br /> with KindeAuth
        </p>
        <p className="text-body-1 hero-tagline">Configure your app</p>

        <Link
          href="https://kinde.com/docs/sdks/nextjs-sdk"
          target="_blank"
          rel="noreferrer"
          className="btn btn-light btn-big"
        >
          Go to docs
        </Link>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { getUser, isAuthenticated } = getKindeServerSession(
    context.req as NextApiRequest,
    context.res as NextApiResponse
  );

  const user = await getUser();
  const authenticated = await isAuthenticated();

  return {
    props: {
      user: user ? {
        id: user.id,
        email: user.email || '',
        given_name: user.given_name || '',
        family_name: user.family_name || '',
        picture: user.picture || '',
      } : null,
      isAuthenticated: authenticated,
    },
  };
};
