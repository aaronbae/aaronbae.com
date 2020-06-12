import {
  VIEWPOST,
  SIGN_OUT,
  FAILED_ADMIN_PASSWORD,
  SUCCEEDED_ADMIN_PASSWORD,
  CHANGE_EDIT_MODE,
  CHANGE_EDIT_DATA
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
  selected_post: -1
}

// Takes care of changing the application state
function AdminReducer(state = initialState, action) {
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
    case CHANGE_EDIT_DATA:
      return {...state, edit_data: action.edit_data }
    default:
      return state
  }
}

export default AdminReducer