import {useRouter} from "next/router";
import {getBookById} from "../../DummyData";
import BookSummary from "../../components/book-detail/book-summary";
import BookDetailHome from "../../components/book-detail/book-detail-home";
import {Fragment} from "react";
import BookDetails from "../../components/book-detail/book-detail";


export default function BookDetailsPage() {
    const router = useRouter();
    const bookId = router.query.bookId;
    const bookDetail = getBookById(bookId);

    if(!bookDetail) return <div>Not Found Book!</div>
    return (
        <Fragment>
            <BookSummary title={bookDetail?.title}/>
            <BookDetailHome item={bookDetail} />
            <BookDetails>
                <p>{bookDetail?.description}</p>
            </BookDetails>
        </Fragment>
    )
}
