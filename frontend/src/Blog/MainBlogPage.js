import React, { Component } from 'react';

// Redux handlers
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { 
  fetch_public_posts
} from '../Redux/BlogActions'

// components 
import Post from './PostCard';
import './MainBlogPage.scss';

class Blog extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetch_public_posts())
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
            <Post key={index} post_id={item._id} />
          )}
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
  return { 
    posts: state.BlogReducer.posts 
  }
}

export default connect(mapStateToProps)(Blog);
