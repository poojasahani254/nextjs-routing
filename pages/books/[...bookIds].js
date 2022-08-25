import BookList from "../../components/module/books/list/book-list";
import { useRouter } from "next/router";
import useSWR from "swr";
import { useEffect, useState } from "react";

function FilteredBookPage() {
  const [loadBooks, setLoadBooks] = useState([]);
  const router = useRouter();
  const bookIds = router.query.bookIds;

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    "https://nextjs-demo-736a9-default-rtdb.firebaseio.com/books.json",
    fetcher
  );

  useEffect(() => {
    if (data) {
      const books = [];
      for (const key in data) {
        books.push({
          id: key,
          ...data[key],
        });
      }

      setLoadBooks(books);
    }
  }, [data]);

  if (!bookIds) return <div>Invalid book details provided!</div>;
  if (!loadBooks) return <div>loading...</div>;

  const year = +bookIds[0];
  const month = +bookIds[1];

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) {
    return <div>Invalid filters. Please adjust yours values !</div>;
  }

  const filterData = loadBooks.filter((event) => {
    const publishDate = new Date(event.date);
    return (
      publishDate.getFullYear() === year && publishDate.getMonth() === month - 1
    );
  });

  if (filterData.length > 0) return <BookList ls={filterData} />;
  else return <div>No found any book for this filter</div>;
}

// export async function getServerSideProps(context) {
//   const { params } = context;
//   const bookIds = params.bookIds;
//
//   if (!bookIds)
//     return {
//       props: {
//         notFoundIds: true,
//       },
//     };
//
//   const year = +bookIds[0];
//   const month = +bookIds[1];
//
//   if (
//     isNaN(year) ||
//     isNaN(month) ||
//     year > 2030 ||
//     year < 2021 ||
//     month < 1 ||
//     month > 12
//   ) {
//     return {
//       props: { validationError: true },
//     };
//   }
//
//   const filterData = await getFilteredBooks({ year: year, month: month });
//
//   return {
//     props: {
//       filterData: filterData,
//     },
//   };
// }

export default FilteredBookPage;
