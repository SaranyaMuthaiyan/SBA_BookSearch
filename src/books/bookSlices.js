import { fetchBooks } from './bookApi';

export const getBooks = createAsync('books/getbooks', fetchBooks);

