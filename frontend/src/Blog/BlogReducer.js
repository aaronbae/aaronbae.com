import {
  LOGIN,
  LOGOUT,
  VIEWPOST,
  EDITPOST,
  DELETEPOST,
  SAVEPOST,
  NEWPOST,
  VISIBILITY
} from './BlogActions'

// The initial application state
let initialState = {
  loggedIn: false,
  userinfo: {
    username: '',
    password: ''
  },
  visible: VISIBILITY.SHOWART,
  posts: [],
  error: ''
}

// Takes care of changing the application state
function BlogReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, formState: action.newFormState }
    case LOGOUT:
      return { ...state, formState: action.newFormState }
    case VIEWPOST:
      return { ...state, formState: action.newFormState }
    case EDITPOST:
      return { ...state, formState: action.newFormState }
    case DELETEPOST:
      return { ...state, formState: action.newFormState }
    case SAVEPOST:
      return { ...state, formState: action.newFormState }
    case NEWPOST:
      return { ...state, formState: action.newFormState }
    default:
      return state
  }
}

export default BlogReducer