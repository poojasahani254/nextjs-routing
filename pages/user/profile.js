import UserProfile from "../../components/module/profile/display-profile/user-profile-display";
import { getSession } from "next-auth/client";

function ProfilePage() {
  return <UserProfile />;
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return {
    props: {session}
  }
}
export default ProfilePage;
