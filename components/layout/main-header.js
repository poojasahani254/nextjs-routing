import classes from "./main-header.module.css";
import Link from "next/link";
import { useSession, signOut } from "next-auth/client";
import { Fragment } from "react";

export default function MainHeader() {
  const [session, loading] = useSession();
  function signoutHandler() {
    signOut();
  }

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href={"/"}>Books</Link>
      </div>
      <nav className={classes.navigation}>
        <ul className={classes.menu_options}>
          {!session && !loading && (
            <li>
              <Link href="/auth">Login</Link>
            </li>
          )}
          {session && (
            <Fragment>
              <li>
                <Link href={"/books"}>Browse All Books</Link>
              </li>
              <li>
                <Link href="/user/profile">Profile</Link>
              </li>
              <li>
                <button onClick={signoutHandler}>Logout</button>
              </li>
            </Fragment>
          )}
        </ul>
      </nav>
    </header>
  );
}
