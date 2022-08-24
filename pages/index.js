import BookList from "../components/books/book-list";
import { getPublishBooks } from "../components/helpers/app-utils";
import { Fragment } from "react";
import Head from "next/head";

export default function Home(props) {
  return (
    <Fragment>
      <Head>
        <title>Next.Js demo</title>
        <meta name={"content"} content={"Find a book details for demo"} />
      </Head>
      <BookList ls={props.ls} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const PublishBooks = await getPublishBooks();
  return {
    props: {
      ls: PublishBooks,
    },
    revalidate: 1800,
  };
}
