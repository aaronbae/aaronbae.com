import React, { Component } from 'react';

// Redux handlers
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { 
  fetch_public_posts,
  fetch_posts, 
  viewpost
} from './BlogActions'

// components 
import Post from './Post';
import './Blog.scss';

class Blog extends Component {

  componentDidMount() {
    const { dispatch, logged_in } = this.props
    if(logged_in){
      dispatch(fetch_posts())
    } else {
      dispatch(fetch_public_posts())
    }
  }

  render() { 
    const { posts } = this.props
    return (
      <div className='row all-blog-container'>
        <div className="offset-sm-0 col-sm-12 offset-md-2 col-md-8">
          <div className="row new-post-container">
            <div className="offset-1 col-10 col-md-11">
              <span className="new-post-label">Most Recent Posts</span>
            </div>
          </div>
          {posts.map((item, index) => 
            <Post key={index} post_id={index} />
          )}
        </div>
      </div>
    );
  }
}
Blog.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  posts: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return { 
    logged_in: state.AdminReducer.logged_in,
    posts: state.BlogReducer.posts 
  }
}

export default connect(mapStateToProps)(Blog);
