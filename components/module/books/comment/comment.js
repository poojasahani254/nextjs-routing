import { useContext, useEffect, useState } from "react";
import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comment.module.css";
import NotificationContext from "../../../../store/notification-context";

function Comments(props) {
  const { bookId } = props;
  const [commentList, setCommentList] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const notificationContext = useContext(NotificationContext);

  useEffect(() => {
    if (showComments) {
      setIsLoading(true);
      fetch(`/api/books/comments/${bookId}`)
        .then((res) => res.json())
        .then((res) => {
          setCommentList(res.comments);
          setIsLoading(false);
        });
    }
  }, [showComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    notificationContext.showNotification({
      title: "Pending",
      message: "Comment post pending !",
      status: "pending",
    });

    fetch(`/api/books/comments/${bookId}`, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return res.json().then((data) => {
          throw new Error(data.message || "Something went wrong!");
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
          message: e.message || "Something went wrong!",
          status: "error",
        });
      });
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && !isLoading && <CommentList ls={commentList} />}
      {isLoading && <p>Loading....</p>}
    </section>
  );
}

export default Comments;
