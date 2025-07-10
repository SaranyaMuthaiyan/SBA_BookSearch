import { fetchBooks } from './bookAPI';

export const getBooks = createAsync('books/getbooks', fetchBooks);

