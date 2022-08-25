import BookList from "../components/module/books/list/book-list";
import { getPublishBooks } from "../components/helpers/app-utils";
import { Fragment } from "react";
import Head from "next/head";
import BookRegister from "../components/module/books/register-user";

export default function Home(props) {
  return (
    <Fragment>
      <Head>
        <title>Next.Js demo</title>
        <meta name={"content"} content={"Find a book details for demo"} />
      </Head>
      <BookRegister />
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
