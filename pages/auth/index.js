import AuthForm from "../../components/module/auth/auth-form";
import { getSession } from "next-auth/client";

function AuthPage() {
  return <AuthForm />;
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      redirect: {
        destination: "/user/profile",
        permanent: true,
      },
    };
  }
  return {
    props: { session },
  };
}

export default AuthPage;
