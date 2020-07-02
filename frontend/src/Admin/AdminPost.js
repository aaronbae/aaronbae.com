import React, { Component } from 'react';
import { format_date } from '../Utils/HelperFunctions';
import { withRouter } from 'react-router-dom';

// Redux handlers
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { viewpost } from '../Redux/AdminActions'

import './AdminPost.scss';

class AdminPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post_id: props.post_id
    }
    this.handlePostClick = this.handlePostClick.bind(this);
  }

  handlePostClick(e) {
    e.stopPropagation();
    const { dispatch, edit_mode } = this.props
    if(edit_mode){
      // TODO: remind user that a post is selected already
    } else {
      dispatch(viewpost(this.state.post_id))  
      window.scrollTo(0, 0)
    }
  }

  render() {
    const { title, date, summarized_content, public_flag } = this.props
    const formatted_date = format_date(date)
    return (
      <div className={public_flag ? "row admin-post-container public" : "row admin-post-container"} onClick={this.handlePostClick}>
        <div className="individual-post">
          <div className="offset-1 col-10">
            <div className="row date">{formatted_date}</div>
            <div className="row title"><p className="h5">{title}</p></div>
            <div className="row">{summarized_content}</div>
          </div>
        </div>
      </div>
    );
  }
}

AdminPost.propTypes = {
  edit_mode: PropTypes.bool.isRequired,
  selected_post: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  summarized_content: PropTypes.string.isRequired,
  public_flag: PropTypes.bool.isRequired
}

function mapStateToProps(state, ownProps) {
  const { edit_mode, selected_post } = state.AdminReducer
  const { posts } = state.BlogReducer
  let this_post = posts[ownProps.post_id]
  return {
    edit_mode: edit_mode,
    selected_post: selected_post,
    title: this_post.title.substring(0,61) + (this_post.title.length > 61 ? "..." : "" ),
    date: this_post.createtime,
    summarized_content: this_post.content.join(" ").substring(0, 100) + "...",
    public_flag: this_post.public
  }
}

export default  withRouter(connect(mapStateToProps)(AdminPost));