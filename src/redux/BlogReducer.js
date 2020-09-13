import {
  UPDATE_POST,
  RECEIVE_POSTS,
  ADD_NEW_POST,
  ADD_NEW_PARAGRAPH,
  REMOVE_PARAGRAPH,
  CHANGE_EDIT_MODE,
} from './BlogActions'

// The initial application state
export let initialState = {
  posts: {},
  current_page: 1,
  total_pages: 1,
  edit_mode: false
}

// Takes care of changing the application state
function BlogReducer(state = initialState, action) {
  var new_posts = {...state.posts}
  switch (action.type) {
    case CHANGE_EDIT_MODE:
      return { ...state, edit_mode: action.edit_mode }
    case REMOVE_PARAGRAPH:
      new_posts[action.post_id].content.splice(action.paragraph_index, 1)
      return { ...state, posts: new_posts }
    case ADD_NEW_PARAGRAPH:
      new_posts[action.post_id].content.splice(parseInt(action.paragraph_index) + 1, 0, action.initial_content)
      return { ...state, posts: new_posts }
    case ADD_NEW_POST:
      new_posts[action.new_post._id] = action.new_post
      return { ...state, posts: new_posts }
    case UPDATE_POST:
      new_posts[action.new_post._id] = action.new_post
      return { ...state, posts: new_posts}
    case RECEIVE_POSTS:
      return { ...state, 
        posts: action.posts, 
        current_page: action.current_page, 
        total_pages: action.total_pages 
      }
    default:
      return state
  }
}

export default BlogReducer