import {
  SIGN_OUT,
  FAILED_ADMIN_PASSWORD,
  SUCCEEDED_ADMIN_PASSWORD
} from './AdminActions'

// The initial application state
export let initialState = {
  failed_attempt: false,
  logged_in: false
}

// Takes care of changing the application state
function AdminReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_OUT:
      return { ...state, logged_in: false }
    case FAILED_ADMIN_PASSWORD:
      return { ...state, failed_attempt: true }
    case SUCCEEDED_ADMIN_PASSWORD:
      return { ...state, failed_attempt: false, logged_in: true }
    default:
      return state
  }
}

export default AdminReducer