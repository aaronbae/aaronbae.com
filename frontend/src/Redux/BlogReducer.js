import {
  CLEAR_POSTS,
  CREATE_NEW_POST,
  UPDATE_POST,
  RECEIVE_POSTS
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
    case CREATE_NEW_POST:
      let new_post = {
        tags: [],
        _id: -1,
        author: 1,
        title: "",
        content: "",
        createtime: action.date,
        public: true,
        updatetime: action.date
      }
      new_posts.unshift(new_post)
      return { ...state, posts: new_posts }
    case UPDATE_POST:
      new_posts[action.index].title = action.new_post.title
      new_posts[action.index].content = action.new_post.content
      new_posts[action.index].tags = action.new_post.tags
      new_posts[action.index].public = action.new_post.public
      return { ...state, posts: new_posts}
    case RECEIVE_POSTS:
      return { ...state, posts: action.posts, id2index: action.id2index }
    default:
      return state
  }
}

export default BlogReducer