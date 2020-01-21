import filterBooks from '../../helpers/filterBooks';
import { getPrice, getTitle } from '../filters/selectors';

export const getBooks = state => state.books;

export const getFilteredBooks = state =>
  filterBooks(getBooks(state), getTitle(state), getPrice(state));
