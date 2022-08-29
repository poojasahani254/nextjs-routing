import classes from "./edit-password.module.css";
import { useRef } from "react";

function EditPassword() {
  const oldPasswordRef = useRef();
  const newPasswordRef = useRef();

  async function editPasswordHandler(event) {
    event.preventDefault();

    const reqBody = {
      oldPassword: oldPasswordRef.current.value,
      newPassword: newPasswordRef.current.value,
    };

    try {
      const rsp = await fetch("/api/user/change-password", {
        method: "PATCH",
        body: JSON.stringify(reqBody),
        headers: {
          "Content-type": "application/json",
        },
      });

      const data = rsp.json();
      if (!rsp.ok) {
        throw new Error(
          data.message || "Something went wrong while edit password !"
        );
      }
    } catch (e) {
      console.log("error---", e);
    }
  }

  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPasswordRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="old-password">Old Password</label>
        <input type="password" id="old-password" ref={oldPasswordRef} />
      </div>
      <div className={classes.action}>
        <button onClick={editPasswordHandler}>Change Password</button>
      </div>
    </form>
  );
}

export default EditPassword;
