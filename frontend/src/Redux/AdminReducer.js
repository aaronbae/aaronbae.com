import {
  VIEWPOST,
  SIGN_OUT,
  FAILED_ADMIN_PASSWORD,
  SUCCEEDED_ADMIN_PASSWORD,
  CHANGE_EDIT_MODE,
  UPDATE_EDIT_CHANGES,
  CREATE_NEW_POST
} from './AdminActions'

// The initial application state
let initialState = {
  failed_attempt: false,
  logged_in: false,
  edit_mode: false,
  edit_data: {
    title: "",
    tags: [],
    content: "",
    public: true
  },
  selected_post: -1,
  posts: []
}

// Takes care of changing the application state
function AdminReducer(state = initialState, action) {
  let new_posts = [...state.posts]
  switch (action.type) {
    case VIEWPOST:
      return { ...state, selected_post: action.post_id }
    case SIGN_OUT:
      return { ...state, logged_in: false }
    case FAILED_ADMIN_PASSWORD:
      return { ...state, failed_attempt: true }
    case SUCCEEDED_ADMIN_PASSWORD:
      return { ...state, failed_attempt: false, logged_in: true }
    case CHANGE_EDIT_MODE:
      return { ...state, edit_mode: action.edit_mode }
    case UPDATE_EDIT_CHANGES:
      new_posts[state.selected_post].title = action.edit_data.title
      new_posts[state.selected_post].content = action.edit_data.content
      new_posts[state.selected_post].tags = action.edit_data.tags
      new_posts[state.selected_post].public = action.edit_data.public
      return { ...state, posts: new_posts, edit_data: action.edit_data }
    case CREATE_NEW_POST:
      let new_post = {
        tags: [],
        _id: -1,
        author: 1,
        title: "",
        content: "",
        createtime: action.date,
        public: true,
        updatetime: action.date
      }
      new_posts.unshift(new_post)
      return { ...state, posts: new_posts }
    default:
      return state
  }
}

export default AdminReducer