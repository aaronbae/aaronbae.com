import {
  CLEAR_POSTS,
  UPDATE_POST,
  RECEIVE_POSTS,
  ADD_NEW_POST,
  ADD_NEW_PARAGRAPH,
  REMOVE_PARAGRAPH,
  CHANGE_EDIT_MODE,
} from './BlogActions'

// The initial application state
let initialState = {
  id2index: {},
  posts: [],
  current_page: 1,
  total_pages: 1,
  edit_mode: false
}

// Takes care of changing the application state
function BlogReducer(state = initialState, action) {
  var new_posts = [...state.posts]
  switch (action.type) {
    case CHANGE_EDIT_MODE:
      return { ...state, edit_mode: action.edit_mode }
    case REMOVE_PARAGRAPH:
      new_posts[action.post_index].content.splice(action.paragraph_index, 1)
      return { ...state, posts: new_posts }
    case ADD_NEW_PARAGRAPH:
      new_posts[action.post_index].content.splice(parseInt(action.paragraph_index) + 1, 0, action.initial_content)
      return { ...state, posts: new_posts }
    case CLEAR_POSTS:
      return { ...state, 
        posts: action.posts, 
        id2index: action.id2index, 
        current_page: action.current_page, 
        total_pages: action.total_pages 
      }
    case UPDATE_POST:
      console.log("REDDUCER")
      console.log(action.new_post)
      const index = state.id2index[action.new_post._id]
      new_posts[index] = action.new_post
      return { ...state, posts: new_posts}
    case RECEIVE_POSTS:
      return { ...state, 
        posts: action.posts, 
        id2index: action.id2index, 
        current_page: action.current_page, 
        total_pages: action.total_pages 
      }
    case ADD_NEW_POST:
      new_posts.unshift(action.new_post)
      return { ...state, posts: new_posts }
    default:
      return state
  }
}

export default BlogReducer