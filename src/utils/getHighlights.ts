const fetchHighlights = async (token: string): Promise<void> => {
  const url = new URL("https://readwise.io/api/v2/highlights/");
  url.searchParams.append("page_size", "100");

  try {
    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });

    if (!response.ok) {
      console.log(response);
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};

// fetch all books https://readwise.io/api_deets
// https://readwise.io/api/v2/books/

const fetchBooks = async (token: string): Promise<void> => {
  const url = new URL("https://readwise.io/api/v2/books/");
  url.searchParams.append("page_size", "1000");

  try {
    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });

    if (!response.ok) {
      console.log(response);
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};

export const getHighlights = async (token: string) => {
  console.log(token);
  try {
    const [highlightsRes, booksRes] = await Promise.all([
      fetchHighlights(token),
      fetchBooks(token),
    ]);
    // @ts-ignore
    const highlights = highlightsRes.results;
    // @ts-ignore
    const books = booksRes.results;

    // add books to highlights

    const highlightsWithBooks = highlights.map((highlight) => {
      const book = books.find((book) => book.id === highlight.book_id);
      return { ...highlight, book };
    });
    console.log(highlightsWithBooks);

    return highlightsWithBooks;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return undefined;
  }

  // Later, if you want to get new highlights updated since your last fetch of allData, do this.
  // const lastFetchWasAt = new Date(Date.now() - 24 * 60 * 60 * 1000); // use your own stored date
  // const newData = await fetchFromExportApi(lastFetchWasAt.toISOString());
};
