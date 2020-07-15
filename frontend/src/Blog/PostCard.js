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
      <div className="individual-post-container col-12" onClick={this.handlePostClick}>
        <div className="row individual-post">
          <div className="col">
            <div className="row date">{formatted_date}</div>
            <div className="row title">{title}</div>
            <div className="row">{summarized_content}</div>
            <div className="row read-more">Read More</div>
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
    summarized_content: this_post.content.join(" ").substring(0, 200) + "..."
  }
}

export default  withRouter(connect(mapStateToProps)(PostCard));