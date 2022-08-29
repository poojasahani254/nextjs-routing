import classes from "./user-profile-display.module.css";
import EditPassword from "../edit-profile/edit-password";
// import { getSession } from "next-auth/client";
// import { useEffect, useState } from "react";

function UserProfile(props) {
  // const [isLoading, setIsLoading] = useState(true);
  //
  // useEffect(() => {
  //   (async () => {
  //     const sessionData = await getSession();
  //     if (!sessionData) {
  //       window.location.href = "/auth";
  //     } else {
  //       setIsLoading(false);
  //     }
  //   })();
  // }, []);

  if (props.session) {
    return <div>Loading....</div>;
  }

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <EditPassword />
    </section>
  );
}

export default UserProfile;
