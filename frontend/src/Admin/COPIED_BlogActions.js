import { config } from '../Constants'

export const VIEWPOST = "VIEW_POST";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const CHANGE_EDIT_MODE = "CHANGE_EDIT_MODE";
export const UPDATE_EDIT_CHANGES = "UPDATE_EDIT_CHANGES";
export const CREATE_NEW_POST = "CREATE_NEW_POST";

function receive_posts(res) {
  return {
    type: RECEIVE_POSTS,
    posts: res,
    receivedAt: Date.now()
  }
}
export function fetch_public_posts() {
  return dispatch => {
    fetch(config.url.POST_URL+"public")
      .then(res => res.json())
      .then(res => dispatch(receive_posts(res)))
  }
}

export function fetch_posts() {
  return dispatch => {
    fetch(config.url.POST_URL)
      .then(res => res.json())
      .then(res => dispatch(receive_posts(res)))
  }
}

export function viewpost(post_id) {
  return {
    type: VIEWPOST, 
    post_id: post_id
  }
}

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
