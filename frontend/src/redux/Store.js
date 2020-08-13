import { useMemo } from 'react'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import BlogReducer, { initialState as BlogInit} from './BlogReducer';
import AdminReducer, { initialState as AdminInit} from './AdminReducer';

let store

function initStore(initialState) {
  const providedAdmin = initialState ? initialState.AdminReducer : {}
  const providedBlog = initialState ? initialState.BlogReducer : {}
  const new_initial_state = {
    AdminReducer: {
      ...AdminInit,
      ...providedAdmin
    },
    BlogReducer: {
      ...BlogInit,
      ...providedBlog
    }
  }  
  const rootReducer = combineReducers({
    BlogReducer,
    AdminReducer
  });
  return createStore(rootReducer, new_initial_state, applyMiddleware(thunkMiddleware))
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}