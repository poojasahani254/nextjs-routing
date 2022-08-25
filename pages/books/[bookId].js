import BookSummary from "../../components/module/books/detail-display/book-summary";
import BookDetailHome from "../../components/module/books/detail-display/book-detail-home";
import { Fragment } from "react";
import BookDetails from "../../components/module/books/detail-display/book-detail";
import { getAllBooks, getBookById } from "../../components/helpers/app-utils";
import Comment from "../../components/module/books/comment/comment";

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
      <Comment bookId={bookDetail.id} />
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
    revalidate: 30,
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
