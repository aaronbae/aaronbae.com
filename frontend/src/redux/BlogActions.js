export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const UPDATE_POST = "UPDATE_POST";
export const CLEAR_POSTS = "CLEAR_POSTS";
export const ADD_NEW_POST = "ADD_NEW_POST";
export const ADD_NEW_PARAGRAPH = "ADD_NEW_PARAGRAPH";
export const REMOVE_PARAGRAPH = "REMOVE_PARAGRAPH";


// TERMINALS
export function remove_paragraph(post_index, paragraph_index) {
  return {
    type: REMOVE_PARAGRAPH,
    post_index: post_index,
    paragraph_index: paragraph_index
  }
}
export function add_new_paragraph(post_index, paragraph_index, initial_content) {
  return {
    type: ADD_NEW_PARAGRAPH,
    post_index: post_index,
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
export function update_post(new_post, index) {
  return {
    type: UPDATE_POST, 
    new_post: new_post, 
    index: index
  }
}
export function clear_posts() {
  return {
    type: CLEAR_POSTS,
    posts: [],
    id2index: {},
    current_page: 1,
    total_pages: 1
  }
}
function receive_posts(res) {
  var id2index = {}  
  // TEMPORARY
  if(!res.hasOwnProperty('posts')) {
    res = {
      posts: res,
      current_page: 1,
      total_pages: 1
    }

  } 
  for( var index in res.posts ) {
    id2index[res.posts[index]._id] = index
  }
  return {
    type: RECEIVE_POSTS,
    posts: res.posts,
    id2index: id2index,
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