import React, { Component } from 'react';

// Redux handlers
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { 
  fetch_posts, 
  create_new_post, 
  viewpost,
  change_edit_mode,
  update_edit_changes
} from './BlogActions'

// components 
import Post from './Post';
import PostEditor from './PostEditor';
import './Blog.scss';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.handleNewPostButton = this.handleNewPostButton.bind(this);
  }

  handleNewPostButton(e) {
    e.stopPropagation();
    const { dispatch, posts } = this.props
    console.log(posts)
    let new_edit_data = {
      title: "",
      content: "",
      tags: []
    }
    dispatch(create_new_post())
    dispatch(viewpost(0))  
    dispatch(update_edit_changes(new_edit_data))
    dispatch(change_edit_mode(true))
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetch_posts())
  }

  render() { 
    const { posts } = this.props
    return (
      <div className='row all-blog-container'>
        <div id="blog-column" className="col-12 col-sm-4 post-column">
          <div className="row center post-column-title">
            <p className="h4">Recent Posts</p>
            <button className="new-post-button h3" type="button" onClick={this.handleNewPostButton}>+</button>
          </div>
          {posts.map((item, index) => 
            <Post key={index} post_id={index} />
          )}
        </div>
        <div className="col-12 col-sm-8">
          <PostEditor />
        </div>
      </div>
    );
  }
}
Blog.propTypes = {
  posts: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return { posts: state.BlogReducer.posts }
}

export default connect(mapStateToProps)(Blog);
