import { 
  update_post,
  fetch_posts, 
  add_new_post 
} from './BlogActions'

export const SIGN_OUT = "SIGN_OUT";
export const FAILED_ADMIN_PASSWORD = "FAILED_ADMIN_PASSWORD";
export const SUCCEEDED_ADMIN_PASSWORD = "SUCCEEDED_ADMIN_PASSWORD";
export const CHANGE_EDIT_MODE = "CHANGE_EDIT_MODE";
export const VIEWPOST = "VIEW_POST";

// Admin Actions
export function sign_out() {
  return {
    type: SIGN_OUT,
    receivedAt: Date.now()
  }
}
function receive_account_results(res) {
  if(res.status === 400){
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
    var url = process.env.NEXT_PUBLIC_USER_URL + "login"
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => dispatch(receive_account_results(res)))
  }
}

// UI Changing Actions
export function change_edit_mode(boolean_value) {
  return {
    type: CHANGE_EDIT_MODE, 
    edit_mode: boolean_value
  }
}
export function viewpost(post_id) {
  return {
    type: VIEWPOST, 
    post_id: post_id
  }
}

// Data Manipulating Actions
export function upload_image(file, post, index, paragraph_index) {
  return dispatch => {
    var url = process.env.NEXT_PUBLIC_FILE_URL + 'upload'
    const data = new FormData() 
    data.append('file', file)
    fetch(url, {
      method: 'POST',
      body: data
    }).then(res => res.json())
    .then(res => {
      let new_content = [...post.content]
      new_content[paragraph_index] = res.url
      let new_post = {...post, content: [...new_content]}
      dispatch(update_post(new_post, index))
    })
  }
}
export function create_new_post() {
  return dispatch => {
    var url = process.env.NEXT_PUBLIC_POST_URL + "add/"
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    }).then(res => res.json())
    .then(res => {
      dispatch(add_new_post(res.post))
      dispatch(viewpost(0))
      dispatch(change_edit_mode(true))
    })
  }
}
export function save_local_changes(post) {
  var url = process.env.NEXT_PUBLIC_POST_URL + "update/" + post._id.toString()
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

export function delete_post(post_id) {
  var url = process.env.NEXT_PUBLIC_POST_URL + "delete/" +post_id.toString()
  return dispatch => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(() => dispatch(fetch_posts()))
    .then(() => dispatch(change_edit_mode(false)))
  }
}