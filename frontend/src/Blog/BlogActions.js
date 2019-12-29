export const VIEWPOST = "VIEW_POST";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const CHANGE_EDIT_MODE = "CHANGE_EDIT_MODE";
export const UPDATE_LOCAL_CHANGES = "UPDATE_LOCAL_CHANGES";

function receive_posts(res) {
  return {
    type: RECEIVE_POSTS,
    posts: res,
    receivedAt: Date.now()
  }
}

export function fetch_posts() {
  return dispatch => {
    fetch("http://localhost:4000/posts")
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

export function update_local_changes(title, content, tags) {
  return {
    type: UPDATE_LOCAL_CHANGES, 
    title: title, 
    content: content, 
    tags: tags,
  }
}

export function save_local_changes(post) {
  var url = "http://localhost:4000/posts/update/" + post._id.toString() 
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
