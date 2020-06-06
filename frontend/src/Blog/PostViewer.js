import React, { Component } from 'react';
import { format_date } from '../Common/Utils';

// Redux handlers
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  fetch_public_posts,
} from './BlogActions'

import './PostViewer.scss';

class PostEditor extends Component {  
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetch_public_posts())
  }

  render() {
    const { logged_in, selected_post, posts } = this.props
    let formatted_date = ""
    if( selected_post !== -1 ) formatted_date = format_date(posts[selected_post].createtime)
    return (
      <div className="row">
        <div className="col-2 previous-button-area">
        </div>
        <div className="col-8">
          <div className="row post-editor-container">
              <div className="col post-editor-main-col"> 
                <div className="row title-row">
                  <p className="h3">{posts[selected_post].title}</p>
                </div>
                <div className="row information-row">
                  <div className="col-5 no-padding">
                    {formatted_date}
                  </div>
                  <div className="col-7 no-padding">
                    <div className="float-right">
                      <span className="tags-label">Tags : </span>
                      {posts[selected_post].tags.map((item, index) =>
                        <span key={index} className={"tag " + item}>
                          {item + ", "}                  
                        </span>
                      )}           
                      {logged_in &&
                        <span className="edit-button" onClick={this.enterEditMode} >Edit Post</span>
                      }
                    </div>
                  </div>
                </div>
                <div className="padding-row row"></div>
                <div className="row content-row">
                  {posts[selected_post].content.split("\n").map((i, key) => {
                    return <div className="content-paragraph" key={key}>{i}</div>
                  })}
                </div>
              </div>
            
          </div>
        </div>
      </div>
    );
  }
}

PostEditor.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  selected_post: PropTypes.number.isRequired,
  posts: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { selected_post, posts } = state.BlogReducer
  return {
    logged_in: state.AdminReducer.logged_in,
    selected_post: selected_post,
    posts: posts
  }
}

export default connect(mapStateToProps)(PostEditor);
