import classes from "./register-user.module.css";
import { useContext, useRef } from "react";
import NotificationContext from "../../../../store/notification-context";

function BookRegister() {
  const emailInputRef = useRef();
  const notificationContext = useContext(NotificationContext);

  function registrationHandler(event) {
    event.preventDefault();

    const reqBody = { email: emailInputRef.current.value };

    notificationContext.showNotification({
      title: "Pending",
      message: "Register user pending !",
      status: "pending",
    });

    fetch(`/api/books/register-user`, {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return res.json().then((data) => {
          throw new Error(data.message || 'Something went wrong!');
        });
      })
      .then((res) => {
        notificationContext.showNotification({
          title: "Success!",
          message: res.message,
          status: "success",
        });
      })
      .catch((e) => {
        notificationContext.showNotification({
          title: "Error!",
          message: e.message || 'Something went wrong!',
          status: "error",
        });
      });
  }

  return (
    <section className={classes.registerUser}>
      <h2>Register the to stay updated !</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailInputRef}
          />
          <button type={"submit"}>Register</button>
        </div>
      </form>
    </section>
  );
}

export default BookRegister;
