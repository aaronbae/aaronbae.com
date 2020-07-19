import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// Redux handlers
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetch_posts } from '../Redux/BlogActions'
import { create_new_post } from '../Redux/AdminActions'

// components 
import AdminPost from './AdminPost';
import PostEditor from './PostEditor';
import './AdminBlog.module.scss';

class AdminBlog extends Component {
  constructor(props) {
    super(props);
    this.handleNewPostButton = this.handleNewPostButton.bind(this);
  }

  handleNewPostButton(e) {
    e.stopPropagation();
    const { dispatch } = this.props
    dispatch(create_new_post())
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetch_posts())
  }

  renderRedirect() {
    const { logged_in } = this.props
    if(!logged_in) {
      return <Redirect to="/login" />
    }
  }

  render() { 
    const { posts, logged_in } = this.props
    return (
      <div className='row admin-blog-container'>
        {this.renderRedirect()}
        <div id="blog-column" className="col-12 col-sm-3 post-column">
          <div className="row center post-column-title">
            <p className="h4">Recent Posts</p>
            {logged_in &&
              <button className="new-post-button h3" type="button" onClick={this.handleNewPostButton}>+</button>
            }
          </div>
          {posts.map((item, index) => 
            <AdminPost key={index} post_id={index} />
          )}
        </div>
        <div className="col-12 col-sm-9">
          <PostEditor />
        </div>
      </div>
    );
  }
}
AdminBlog.propTypes = {
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

export default connect(mapStateToProps)(AdminBlog);
