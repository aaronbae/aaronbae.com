import React, { Component } from 'react';

// Redux handlers
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  fetch_posts,
  change_edit_mode,
  update_local_changes,
  save_local_changes
} from './BlogActions'

import './PostEditor.scss';

class PostEditor extends Component {
  constructor(props) {
    super(props);
    this.enterEditMode = this.enterEditMode.bind(this);
    this.update_title = this.update_title.bind(this);
    this.update_content = this.update_content.bind(this);
    this.update_tags = this.update_tags.bind(this);
    this.save_changes = this.save_changes.bind(this);
    this.cancel_changes = this.cancel_changes.bind(this);
  }

  enterEditMode(e) {
    e.stopPropagation();
    const { dispatch, selected_post, posts  } = this.props
    const curr_post = posts[selected_post]
    // initialize textarea values
    const titleinput = document.querySelector('.title-input')
    titleinput.value = curr_post.title
    const tagsinput = document.querySelector('.tags-input')
    tagsinput.value = curr_post.tags
    const contentinput = document.querySelector('.content-input')
    contentinput.value = curr_post.content
    // dispatch edit_mode
    dispatch(change_edit_mode(true))
  }

  update_title(e) {
    e.stopPropagation();
    // auto re-size
    e.target.style.height = 'inherit'
    e.target.style.height = e.target.scrollHeight.toString() + "px" 
    
    const { dispatch, selected_post, posts  } = this.props
    var curr_post = posts[selected_post]
    dispatch(update_local_changes(e.target.value, curr_post.content, curr_post.tags))
  }

  update_content(e) {
    e.stopPropagation();
    // auto re-size
    e.target.style.height = 'inherit'
    e.target.style.height = e.target.scrollHeight.toString() + "px" 

    const { dispatch, selected_post, posts  } = this.props
    var curr_post = posts[selected_post]
    dispatch(update_local_changes(curr_post.title, e.target.value, curr_post.tags))
  }

  update_tags(e) {
    e.stopPropagation();
    const { dispatch, selected_post, posts  } = this.props
    var curr_post = posts[selected_post]
    dispatch(update_local_changes(curr_post.title, curr_post.content, e.target.value.split(',')))
  }

  save_changes(e) {
    e.stopPropagation();
    const { dispatch, selected_post, posts  } = this.props
    var curr_post = posts[selected_post]
    dispatch(save_local_changes(curr_post))
  }

  cancel_changes(e) {
    e.stopPropagation();
    const { dispatch, selected_post, posts  } = this.props
    dispatch(fetch_posts())
    dispatch(change_edit_mode(false))
  }
  
  render() {
    const { edit_mode, selected_post, posts } = this.props
    return (
      <div className="row post-editor-container">
        {selected_post > -1 &&
          <div className={edit_mode ? "col post-editor-main-col hidden" : "col post-editor-main-col"}> 
            <div className="row title-row">
              <p className="h3">{posts[selected_post].title}</p>
            </div>
            <div className="row information-row">
              <div className="col-5 no-padding">
                {posts[selected_post].createtime}
              </div>
              <div className="col-7 no-padding">
                <div className="float-right">
                  <span className="tags-label">Tags : </span>
                  {posts[selected_post].tags.map((item, index) =>
                    <span key={index} className={"tag " + item}>
                      {item + ", "}                  
                    </span>
                  )}
                  <span className="edit-button" onClick={this.enterEditMode} >Edit Post</span>
                </div>
              </div>
            </div>
            <div className="row content-row">
              {posts[selected_post].content}
            </div>
          </div>
        }
        {selected_post > -1 && 
          <div className={edit_mode ? "col post-editor-main-col" : "col post-editor-main-col hidden"}>
            <div className="row title-row">
              <textarea className="title-input h3" onChange={this.update_title}/>
            </div>
            <div className="row information-row">
              <div className="col-5 no-padding">
                {posts[selected_post].createtime}
              </div>
              <div className="col-7 no-padding">
                <div className="float-right">
                  <span className="tags-label">Tags : </span>
                  <input  className="tags-input" type="text" onChange={this.update_tags}/>
                </div>
              </div>
            </div>
            <div className="row content-row">
              <textarea  className="content-input" onChange={this.update_content}/>
            </div> 
            <div className="row button-row">
              <div>
                <button className="save-button" type="button" onClick={this.save_changes}>Save</button>
                <button className="cancel-button" type="button" onClick={this.cancel_changes}>Cancel</button>
              </div>
            </div>          
          </div>
        }
      </div>
    );
  }
}

PostEditor.propTypes = {
  edit_mode: PropTypes.bool.isRequired,
  selected_post: PropTypes.number.isRequired,
  posts: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  const { edit_mode, selected_post, posts } = state.BlogReducer
  return {
    edit_mode: edit_mode,
    selected_post: selected_post,
    posts: posts
  }
}

export default connect(mapStateToProps)(PostEditor);
