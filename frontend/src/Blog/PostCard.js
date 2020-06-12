import React, { Component } from 'react';
import { format_date } from '../Utils/HelperFunctions';
import { withRouter } from 'react-router-dom';

// Redux handlers
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './PostCard.scss';

class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post_id: props.post_id
    }
    this.handlePostClick = this.handlePostClick.bind(this);
  }

  handlePostClick(e) {
    e.stopPropagation();
    this.props.history.push("/blog/"+this.props.post_id)
  }

  render() {
    const { title, date, summarized_content } = this.props
    const formatted_date = format_date(date)
    return (
      <div className="row individual-post-container" onClick={this.handlePostClick}>
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

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  summarized_content: PropTypes.string.isRequired
}

function mapStateToProps(state, ownProps) {
  const { posts, id2index } = state.BlogReducer
  let this_post = posts[id2index[ownProps.post_id]]
  return {
    title: this_post.title.substring(0,61) + (this_post.title.length > 61 ? "..." : "" ),
    date: this_post.createtime,
    summarized_content: this_post.content.substring(0, 100) + "..."
  }
}

export default  withRouter(connect(mapStateToProps)(PostCard));