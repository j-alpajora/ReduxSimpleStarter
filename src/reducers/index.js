import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import StudentsReducer from './reducer_estudents';

// combineReducers: will include this to the application state
const rootReducer = combineReducers({
  books: BooksReducer,
  students: StudentsReducer
});

export default rootReducer;
