import {getPublishBooks} from "../DummyData";
import BookList from "../components/books/book-list";

export default function Home() {
   const PublishBooks = getPublishBooks();
  return (
    <div>
    <BookList ls={PublishBooks}/>
    </div>
  )
}
