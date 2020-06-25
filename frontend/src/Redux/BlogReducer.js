import {
  CLEAR_POSTS,
  UPDATE_POST,
  RECEIVE_POSTS,
  ADD_NEW_POST
} from './BlogActions'

// The initial application state
let initialState = {
  id2index: {},
  posts: []
}

// Takes care of changing the application state
function BlogReducer(state = initialState, action) {
  var new_posts = [...state.posts]
  switch (action.type) {
    case CLEAR_POSTS:
      return { ...state, posts: action.posts, id2index: action.id2index }
    case UPDATE_POST:
      new_posts[action.index].title = action.new_post.title
      new_posts[action.index].content = action.new_post.content
      new_posts[action.index].tags = action.new_post.tags
      new_posts[action.index].public = action.new_post.public
      return { ...state, posts: new_posts}
    case RECEIVE_POSTS:
      return { ...state, posts: action.posts, id2index: action.id2index }
    case ADD_NEW_POST:
      new_posts.unshift(action.new_post)
      return { ...state, posts: new_posts }
    default:
      return state
  }
}

export default BlogReducer