import React, { Component } from 'react';

// Redux handlers
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { 
  fetch_public_posts
} from '../Redux/BlogActions'

import { query_param_string_to_objects } from "../Utils/HelperFunctions"

// components 
import PostCard from './PostCard';
import './MainBlogPage.scss';

class MainBlogPage extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    let query = query_param_string_to_objects(this.props.location.search)
    let skip = 0
    if("skip" in query){
      skip = query.skip
    }
    dispatch(fetch_public_posts(skip))
  }

  render() { 
    const { posts } = this.props
    return (
      <div className='row all-blog-container'>
        <div className="offset-1 col-10 offset-md-2 col-md-8 offset-lg-3 col-lg-6 card-wrapper">
          <div className="row whats-new-container">What's New?</div>
          <div className="card-title-break"></div>
          <div className="row post-container">
            {posts.map((item, index) => 
              <PostCard key={index} post_id={item._id} />
            )}
          </div>
          <div className="row page-selector">
            Page Selector Here
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
