import React, { Component } from 'react';

// Redux handlers
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetch_posts } from './BlogActions'

// components 
import Post from './Post';
import PostEditor from './PostEditor';
import './Blog.scss';

class Blog extends Component {
  constructor(props) {
    super(props);
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
            <input className="new-post-button h3" type="button" value="+"/>
          </div>
          {posts.map((item, index) => 
            <Post key={item._id} post_id={index} />
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
  selected_post: PropTypes.number.isRequired,
  posts: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { selected_post, posts } = state.BlogReducer
  return {
    selected_post: selected_post,
    posts: posts
  }
}

export default connect(mapStateToProps)(Blog);
