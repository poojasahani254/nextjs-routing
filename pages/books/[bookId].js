import BookSummary from "../../components/book-detail/book-summary";
import BookDetailHome from "../../components/book-detail/book-detail-home";
import { Fragment } from "react";
import BookDetails from "../../components/book-detail/book-detail";
import { getAllBooks, getBookById } from "../../components/helpers/app-utils";

export default function BookDetailsPage(props) {
  const { bookDetail } = props;

  if (!bookDetail) return <div>Not Found Book!</div>;
  return (
    <Fragment>
      <BookSummary title={bookDetail?.title} />
      <BookDetailHome item={bookDetail} />
      <BookDetails>
        <p>{bookDetail?.description}</p>
      </BookDetails>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const bookDetail = await getBookById(params.bookId);
  return {
    props: {
      bookDetail: bookDetail,
    },
    revalidate: 30
  };
}

export async function getStaticPaths() {
  const books = await getAllBooks();
  const paths = books.map((v) => ({ params: { bookId: v.id } }));
  return {
    paths: paths,
    fallback: "blocking",
  };
}
