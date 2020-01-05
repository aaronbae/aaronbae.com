import React, { Component } from 'react';

// Redux handlers
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { 
  fetch_public_posts,
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
    let new_edit_data = {
      title: "",
      content: "",
      tags: [],
      public: true
    }
    dispatch(create_new_post())
    dispatch(viewpost(0))  
    dispatch(update_edit_changes(new_edit_data))
    dispatch(change_edit_mode(true))
  }

  componentDidMount() {
    const { dispatch, logged_in } = this.props
    if(logged_in){
      dispatch(fetch_posts())
    } else {
      dispatch(fetch_public_posts())
    }
  }

  render() { 
    const { posts, logged_in } = this.props
    return (
      <div className='row all-blog-container'>
        <div id="blog-column" className="col-12 col-sm-4 post-column">
          <div className="row center post-column-title">
            <p className="h4">Recent Posts</p>
            {logged_in &&
              <button className="new-post-button h3" type="button" onClick={this.handleNewPostButton}>+</button>
            }
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
