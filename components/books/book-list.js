import BookItem from "./book-item";
import classes from "./book-list.module.css";

function BookList({ ls }) {
  return (
    <ul className={classes.list}>
      {ls.map((books) => (
        <BookItem key={books.id} item={books} />
      ))}
    </ul>
  );
}

export default BookList;
