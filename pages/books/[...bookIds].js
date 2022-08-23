import {useRouter} from "next/router";
import {getFilteredBooks} from "../../DummyData"
import BookList from "../../components/books/book-list";

export default function FilteredBookPage() {
    const router = useRouter();
    const bookIds = router.query.bookIds

    if(!bookIds) return <div>Not found a book</div>

    const year = +bookIds[0];
    const month = +bookIds[1];

    if(isNaN(year) || isNaN(month) || year > 2030 || year < 2021 || month <1 || month > 12) {
        return <div>Invaild filters. Please adjust yours values !</div>
    }

    const filterData = getFilteredBooks({year: year, month: month})
    if(filterData.length > 0) return <BookList ls={filterData}/>
    else return <div>No found any book for this filter</div>
}
