import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// Reducers
import sessionReducer from './session/reducer';
import books from './books/reducer';
import selectedBook from './selectedBook/reducer';
import cartList from './cartList/reducer';
import isLogOutModalOpen from './controllers/reducer';
import filters from './filters/reducer';
import errors from './errors/reducer';
import loadings from './loadings/reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token', 'username'],
};

const rootReducer = combineReducers({
  session: persistReducer(persistConfig, sessionReducer),
  books,
  selectedBook,
  cartList,
  isLogOutModalOpen,
  filters,
  errors,
  loadings,
});

const middleware = [ReduxThunk];

const enhancer =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(...middleware))
    : applyMiddleware(...middleware);

export const store = createStore(rootReducer, enhancer);

export const persistor = persistStore(store);
