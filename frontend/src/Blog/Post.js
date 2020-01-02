import React, { Component } from 'react';

// Redux handlers
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { viewpost } from './BlogActions'

import './Post.scss';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post_id: props.post_id
    }
    this.handlePostClick = this.handlePostClick.bind(this);
  }

  handlePostClick(e) {
    e.stopPropagation();
    const { dispatch, edit_mode, posts, selected_post } = this.props
    if(edit_mode){
      // TODO: send a warning
    } else {
      dispatch(viewpost(this.state.post_id))  
    }
  }

  render() {
    const { title, date, selected_post } = this.props
    return (
      <div className="row individual-post-container" onClick={this.handlePostClick}>
        <div className={selected_post==this.state.post_id? "individual-post selected-post" : "individual-post"}>
          <div className="offset-1 col-10">
            <div className="row date">{date}</div>
            <div className="row title"><p className="h5">{title}</p></div>
          </div>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  edit_mode: PropTypes.bool.isRequired,
  selected_post: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

function mapStateToProps(state, ownProps) {
  const { edit_mode, selected_post, posts } = state.BlogReducer
  let this_post = posts[ownProps.post_id]
  return {
    edit_mode: edit_mode,
    selected_post: selected_post,
    title: this_post.title,
    date: this_post.createtime
  }
}

export default connect(mapStateToProps)(Post);