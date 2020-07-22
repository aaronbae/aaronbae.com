import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { update_post } from '../Redux/BlogActions'
import Toggle from '../Utils/Toggle';


class PublicToggle extends Component {
  constructor(props) {
    super(props);
    this.update_public = this.update_public.bind(this);
  }

  update_public(e) {
    e.stopPropagation();
    const { dispatch, posts, index } = this.props
    let post = posts[index]
    dispatch(update_post({...post, public: !post.public}, index))
  }

  render() {
    const { posts, index } = this.props
    return (
      <Toggle checked={posts[index].public} width="50px" click_behavior={this.update_public}/>
    )
  }
}

PublicToggle.propTypes = {
  posts: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired
}

function mapStateToProps(state) {
  const { selected_post } = state.AdminReducer
  const { posts } = state.BlogReducer
  return { 
    posts: posts,
    index: selected_post
  }
}


export default connect(mapStateToProps)(PublicToggle);
