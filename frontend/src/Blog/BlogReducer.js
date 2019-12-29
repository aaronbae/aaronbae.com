import {
  VIEWPOST,
  RECEIVE_POSTS,
  CHANGE_EDIT_MODE,
  UPDATE_LOCAL_CHANGES
} from './BlogActions'

// The initial application state
let initialState = {
  edit_mode: false,
  selected_post: -1,
  posts: []
}

// Takes care of changing the application state
function BlogReducer(state = initialState, action) {
  switch (action.type) {
    case VIEWPOST:
      return { ...state, selected_post: action.post_id }
    case RECEIVE_POSTS:
      return { ...state, posts: action.posts }
    case CHANGE_EDIT_MODE:
      return { ...state, edit_mode: action.edit_mode }
    case UPDATE_LOCAL_CHANGES:
      let new_posts = state.posts
      new_posts[state.selected_post].title = action.title
      new_posts[state.selected_post].content = action.content
      new_posts[state.selected_post].tags = action.tags
      return { ...state, posts: new_posts }
    default:
      return state
  }
}

export default BlogReducer