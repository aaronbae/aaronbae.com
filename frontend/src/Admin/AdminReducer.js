import {
  FAILED_ADMIN_PASSWORD,
  SUCCEEDED_ADMIN_PASSWORD,
} from './AdminActions'

// The initial application state
let initialState = {
  failed_attempt: false,
  logged_in: false,
  user: {
    login_id: "",
    login_password: [],
    first_name: "",
    last_name: ""
  }
}

// Takes care of changing the application state
function AdminReducer(state = initialState, action) {
  switch (action.type) {
    case FAILED_ADMIN_PASSWORD:
      return { ...state, failed_attempt: true }
    case SUCCEEDED_ADMIN_PASSWORD:
      return { ...state, failed_attempt: false, logged_in: true, user: action.user }
    default:
      return state
  }
}

export default AdminReducer