import { config } from '../Constants'
import { fetch_posts } from './BlogActions'

// Original Admin Actions
export const SIGN_OUT = "SIGN_OUT";
export const FAILED_ADMIN_PASSWORD = "FAILED_ADMIN_PASSWORD";
export const SUCCEEDED_ADMIN_PASSWORD = "SUCCEEDED_ADMIN_PASSWORD";

// Original Blog Actions
export const CHANGE_EDIT_MODE = "CHANGE_EDIT_MODE";
export const UPDATE_EDIT_CHANGES = "UPDATE_EDIT_CHANGES";
export const CREATE_NEW_POST = "CREATE_NEW_POST";
export const VIEWPOST = "VIEW_POST";

// Original Admin Actions
export function sign_out() {
  return {
    type: SIGN_OUT,
    receivedAt: Date.now()
  }
}

function receive_account_results(res) {
  if(res.status == 400){
    return {
      type: FAILED_ADMIN_PASSWORD,
      receivedAt: Date.now()
    }
  }
  
  return {
    type: SUCCEEDED_ADMIN_PASSWORD,
    receivedAt: Date.now()
  }
}

export function check_account(id, password) {
  let data = {
    login_id: id,
    login_password: password
  }
  return dispatch => {
    var url = config.url.USER_URL + "login"
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => dispatch(receive_account_results(res)))
  }
}


// Original Blog Actions
export function change_edit_mode(boolean_value) {
  return {
    type: CHANGE_EDIT_MODE, 
    edit_mode: boolean_value
  }
}

export function update_edit_changes(edit_data) {
  return {
    type: UPDATE_EDIT_CHANGES, 
    edit_data: edit_data
  }
}

export function save_local_changes(post) {
  var url = config.url.POST_URL + "update/" + post._id.toString()
  if(post._id == -1){
    url = config.url.POST_URL + "add/" 
    delete post._id
  } 
  return dispatch => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    }).then(res => dispatch(change_edit_mode(false)))
  }
}

export function create_new_post() {
  return {
    type: CREATE_NEW_POST,
    date: new Date().toISOString()
  }
}

export function delete_post(post_id) {
  var url = config.url.POST_URL + "delete/" +post_id.toString()
  return dispatch => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(res => dispatch(fetch_posts()))
  }
}

export function viewpost(post_id) {
  return {
    type: VIEWPOST, 
    post_id: post_id
  }
}
