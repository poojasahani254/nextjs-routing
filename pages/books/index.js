import { getAllBooks } from "../../DummyData";
import BookList from "../../components/books/book-list";
import { Fragment } from "react";
import BookFilter from "../../components/books/book-filter";
import { useRouter } from "next/router";

export default function AllBooksPage() {
  const bookList = getAllBooks();
  const router = useRouter();

  function onSearch(year, month) {
    router.push(`/books/${year}/${month}`);
  }

  return (
    <Fragment>
      <BookFilter onSearch={onSearch} />
      <BookList ls={bookList} />
    </Fragment>
  );
}
