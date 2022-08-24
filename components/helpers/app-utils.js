export async function getPublishBooks() {
  return (await getAllBooks()).filter((event) => event.isPublish);
}

export async function getAllBooks() {
  const response = await fetch(
    "https://nextjs-demo-736a9-default-rtdb.firebaseio.com/books.json"
  );

  const data = await response.json();
  const books = [];

  for (const key in data) {
    books.push({
      id: key,
      ...data[key],
    });
  }

  return books;
}

export async function getFilteredBooks(dateFilter) {
  const { year, month } = dateFilter;
  return (await getAllBooks()).filter((event) => {
    const publishDate = new Date(event.date);
    return (
      publishDate.getFullYear() === year && publishDate.getMonth() === month - 1
    );
  });
}

export async function getBookById(id) {
  return (await getAllBooks()).find((event) => event.id === id);
}
