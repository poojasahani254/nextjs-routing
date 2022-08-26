import classes from "./user-profile-display.module.css";
import EditPassword from "../edit-profile/edit-password";

function UserProfile() {
  // Redirect away if NOT auth

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <EditPassword />
    </section>
  );
}

export default UserProfile;
