import { config } from '../Constants'

export const VIEWPOST = "VIEW_POST";
export const RECEIVE_POSTS = "RECEIVE_POSTS";

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
