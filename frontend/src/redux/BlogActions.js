export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const UPDATE_POST = "UPDATE_POST";
export const ADD_NEW_POST = "ADD_NEW_POST";
export const ADD_NEW_PARAGRAPH = "ADD_NEW_PARAGRAPH";
export const REMOVE_PARAGRAPH = "REMOVE_PARAGRAPH";
export const CHANGE_EDIT_MODE = "CHANGE_EDIT_MODE";

// TERMINALS
export function change_edit_mode(boolean_value) {
  return {
    type: CHANGE_EDIT_MODE, 
    edit_mode: boolean_value
  }
}
export function remove_paragraph(post_id, paragraph_index) {
  return {
    type: REMOVE_PARAGRAPH,
    post_id: post_id,
    paragraph_index: paragraph_index
  }
}
export function add_new_paragraph(post_id, paragraph_index, initial_content) {
  return {
    type: ADD_NEW_PARAGRAPH,
    post_id: post_id,
    paragraph_index: paragraph_index,
    initial_content: initial_content
  }
}
export function add_new_post(new_post) {
  return {
    type: ADD_NEW_POST,
    new_post: new_post
  }
}
export function update_post(new_post) {
  return {
    type: UPDATE_POST, 
    new_post: new_post
  }
}
export function update_title(new_post, title) {
  new_post.title = title
  return {
    type: UPDATE_POST,
    new_post: new_post
  }
}
export function update_tags(new_post, tags) {
  new_post.tags = tags
  return {
    type: UPDATE_POST,
    new_post: new_post
  }
}
function receive_posts(res) {
  // TEMPORARY
  if(!res.hasOwnProperty('posts')) {
    res = {
      posts: res,
      current_page: 1,
      total_pages: 1
    }
  } 
  const posts = {}
  for( var index in res.posts ) {
    let p = res.posts[index]
    posts[p._id] = p
  }
  return {
    type: RECEIVE_POSTS,
    posts: posts,
    current_page: res.current_page,
    total_pages: res.total_pages,
    receivedAt: Date.now()
  }
}

// FETCHERS
export function fetch_public_posts(skip = 0) {
  return dispatch => {
    let url = process.env.NEXT_PUBLIC_POST_URL+"public"
    if(skip > 0){
      url += "?skip="+skip.toString()
    } 
    fetch(url)
      .then(res => res.json())
      .then(res => {
        dispatch(receive_posts(res))
      })
  }
}

export function fetch_posts(skip = 0) {
  return dispatch => {
    let url = process.env.NEXT_PUBLIC_POST_URL
    if(skip > 0){
      url += "?skip="+skip.toString()
    } 
    fetch(url)
      .then(res => res.json())
      .then(res => dispatch(receive_posts(res)))
  }
}

export function fetch_post_by_id(post_id) {
  return dispatch => {
    fetch(process.env.NEXT_PUBLIC_POST_URL+post_id)
      .then(res => res.json())
      .then(res => dispatch(receive_posts(res)))
  }
}

// MANIPULATORS
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
    .then(() => dispatch(change_edit_mode(false)))
  }
}