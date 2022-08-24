import BookList from "../../components/books/book-list";
import { Fragment } from "react";
import BookFilter from "../../components/books/book-filter";
import { useRouter } from "next/router";
import { getAllBooks } from "../../components/helpers/app-utils";

export default function AllBooksPage(props) {
  const router = useRouter();

  function onSearch(year, month) {
    router.push(`/books/${year}/${month}`);
  }

  return (
    <Fragment>
      <BookFilter onSearch={onSearch} />
      <BookList ls={props.ls} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const PublishBooks = await getAllBooks();
  return {
    props: { ls: PublishBooks },
    revalidate: 60,
  };
}
