import priceSelectorOptions from '../constants/priceSelectorOptions';

const filterBooks = (books, title, price) => {
  let filteredBooks = [...books];
  if (title) {
    filteredBooks = filteredBooks.filter(book =>
      book.title.toLowerCase().includes(title.toLowerCase()),
    );
  }
  if (price !== priceSelectorOptions.DEFAULT) {
    filteredBooks =
      price === priceSelectorOptions.MAX
        ? filteredBooks.filter(book => book.price >= Number(price))
        : filteredBooks.filter(
            book =>
              book.price >= Number(price) && book.price < Number(price) + 15,
          );
  }

  return filteredBooks;
};

export default filterBooks;
