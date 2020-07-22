
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import BlogReducer from './BlogReducer';
import AdminReducer from './AdminReducer';

const rootReducer = combineReducers({
  BlogReducer,
  AdminReducer
});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export default store
