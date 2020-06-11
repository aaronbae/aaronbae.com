import {
  RECEIVE_POSTS
} from './BlogActions'

// The initial application state
let initialState = {
  id2index: {},
  posts: []
}

// Takes care of changing the application state
function BlogReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return { ...state, posts: action.posts, id2index: action.id2index }
    default:
      return state
  }
}

export default BlogReducer