import classes from "./comment-list.module.css";

function CommentList(props) {
  return (
    <ul className={classes.comments}>
      {props.ls?.map((v) => (
        <li key={v._id}>
          <p>{v.name}</p>
          <div>
            By <address>{v.text}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
