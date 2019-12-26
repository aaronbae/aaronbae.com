import React, { Component } from 'react';

// Redux handlers
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  viewpost,
  fetch_posts
} from './BlogActions'

// components 
import Post from './Post';
import PostEditor from './PostEditor';
import './Blog.scss';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.handlePostClick = this.handlePostClick.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetch_posts())
  }

  handlePostClick(e) {
    e.stopPropagation();
    const { dispatch } = this.props
    const index = parseInt(e.currentTarget.getAttribute("postindex"));
    dispatch(viewpost(index))
  }

  render() { 
    const { posts } = this.props
    return (
      <div className='row all-blog-container'>
        <div id="blog-column" className="col-sm-12 col-md-6 col-xl-4 post-column">
          <div className="row center post-column-title"><p className="h4">Recent Posts</p></div>
          {posts.map((item, index) => 
            <Post key={item._id} 
              post_id={item._id} 
              date={item.createtime} 
              title={item.title}
              tags={item.tags} 
              public={item.public} 
              clickbehavior={this.handlePostClick}
              postindex={index}
            />
          )}
        </div>
        <div className="col-sm-12 col-md-5 col-xl-7">
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
