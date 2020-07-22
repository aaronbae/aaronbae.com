import { config } from '../Constants'

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
    id2index: {}
  }
}
function receive_posts(res) {
  var id2index = {}   
  if(!Array.isArray(res)){
    res = [res]
  }
  for( var index in res ) {
    id2index[res[index]._id] = index
  }
  return {
    type: RECEIVE_POSTS,
    posts: res,
    id2index: id2index,
    receivedAt: Date.now()
  }
}

// PROCESSORS
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

export function fetch_post_by_id(post_id) {
  return dispatch => {
    fetch(config.url.POST_URL+post_id)
      .then(res => res.json())
      .then(res => dispatch(receive_posts(res)))
  }
}
