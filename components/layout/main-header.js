import classes from "./main-header.module.css";
import Link from "next/link";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href={"/"}>Books</Link>
      </div>
      <nav className={classes.navigation}>
        <ul className={classes.menu_options}>
          <li>
            <Link href={"/books"}>Browse All Books</Link>
          </li>
          <li>
            <Link href="/auth">Login</Link>
          </li>
          <li>
            <Link href="/user/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
