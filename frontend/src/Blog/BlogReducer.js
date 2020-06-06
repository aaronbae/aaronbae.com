import {
  VIEWPOST,
  RECEIVE_POSTS
} from './BlogActions'

// The initial application state
let initialState = {
  selected_post: 0,
  posts: []
}

// Takes care of changing the application state
function BlogReducer(state = initialState, action) {
  switch (action.type) {
    case VIEWPOST:
      return { ...state, selected_post: action.post_id }
    case RECEIVE_POSTS:
      return { ...state, posts: action.posts }
    default:
      return state
  }
}

export default BlogReducer