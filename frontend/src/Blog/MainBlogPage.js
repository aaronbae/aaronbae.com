import React, { Component } from 'react';

// Redux handlers
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { 
  fetch_public_posts
} from '../Redux/BlogActions'

// components 
import PostCard from './PostCard';
import './MainBlogPage.scss';

class MainBlogPage extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetch_public_posts())
  }

  render() { 
    const { posts } = this.props
    return (
      <div className='row all-blog-container'>
        <div className="offset-sm-0 col-sm-12 offset-md-2 col-md-8">
          <div className="row whats-new-container">What's New?</div>
          <div className="row post-container">
            {posts.map((item, index) => 
              <PostCard key={index} post_id={item._id} />
            )}
          </div>
        </div>
      </div>
    );
  }
}
MainBlogPage.propTypes = {
  posts: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return { 
    posts: state.BlogReducer.posts,
    logged_in: state.AdminReducer.logged_in 
  }
}

export default connect(mapStateToProps)(MainBlogPage);
