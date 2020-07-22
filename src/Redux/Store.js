
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import BlogReducer from './BlogReducer';
import AdminReducer from './AdminReducer';

const rootReducer = combineReducers({
  BlogReducer,
  AdminReducer
});
const store = storeWithInitial({})
//TODO: WHY IS THIS NOT WORKING?
export function storeWithInitial(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware))
}

export default store
