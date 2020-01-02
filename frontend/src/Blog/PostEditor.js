import React, { Component } from 'react';

// Redux handlers
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  fetch_posts,
  change_edit_mode,
  update_edit_changes,
  save_local_changes,
  delete_post
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
    this.handle_delete_button = this.handle_delete_button.bind(this);
  }

  enterEditMode(e) {
    e.stopPropagation();
    const { dispatch, selected_post, posts  } = this.props
    const curr_post = posts[selected_post]
    let new_edit_data = {
      title: curr_post.title,
      content: curr_post.content,
      tags: curr_post.tags
    }
    dispatch(change_edit_mode(true))
    dispatch(update_edit_changes(new_edit_data))
  }

  update_title(e) {
    e.stopPropagation();
    // auto re-size
    e.target.style.height = e.target.scrollHeight.toString() + "px" 

    const { dispatch, edit_data } = this.props
    let new_edit_data = {...edit_data, title: e.target.value}
    dispatch(update_edit_changes(new_edit_data))
  }

  update_content(e) {
    e.stopPropagation();
    // auto re-size
    e.target.style.height = e.target.scrollHeight.toString() + "px" 

    const { dispatch, edit_data } = this.props
    let new_edit_data = {...edit_data, content: e.target.value}
    dispatch(update_edit_changes(new_edit_data))
  }

  update_tags(e) {
    e.stopPropagation();
    const { dispatch, edit_data } = this.props
    let new_edit_data = {...edit_data, tags: e.target.value.split(',')}
    dispatch(update_edit_changes(new_edit_data))
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

  handle_delete_button(e) {
    e.stopPropagation();
    const { dispatch, selected_post, posts  } = this.props
    dispatch(delete_post(posts[selected_post]['_id']))
    dispatch(change_edit_mode(false))
  }
  
  render() {
    const { edit_mode, selected_post, posts, edit_data } = this.props
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
              {posts[selected_post].content.split("\n").map((i, key) => {
                return <div className="content-paragraph" key={key}>{i}</div>
              })}
            </div>
          </div>
        }
        {selected_post > -1 && 
          <div className={edit_mode ? "col post-editor-main-col" : "col post-editor-main-col hidden"}>
            <div className="row title-row">
              <textarea className="title-input h3" value={edit_data.title} onChange={this.update_title} placeholder="Your Title..."/>
            </div>
            <div className="row information-row">
              <div className="col-5 no-padding">
                {posts[selected_post].createtime}
              </div>
              <div className="col-7 no-padding">
                <div className="float-right">
                  <span className="tags-label">Tags : </span>
                  <input  className="tags-input" type="text" value={edit_data.tags} onChange={this.update_tags} placeholder="tag, tag, ..."/>
                </div>
              </div>
            </div>
            <div className="row content-row">
              <textarea  className="content-input" value={edit_data.content} onChange={this.update_content} placeholder="What's on your Mind?"/>
            </div> 
            <div className="row button-row">
              <div>
                <button className="save-button" type="button" onClick={this.save_changes}>Save</button>
                <button className={posts[selected_post]['_id']==-1 ? "delete-button hidden" : "delete-button"} type="button" onClick={this.handle_delete_button}>Delete</button>
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
  edit_data: PropTypes.object.isRequired,
  selected_post: PropTypes.number.isRequired,
  posts: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  const { edit_mode, edit_data, selected_post, posts } = state.BlogReducer
  return {
    edit_mode: edit_mode,
    edit_data: edit_data,
    selected_post: selected_post,
    posts: posts
  }
}

export default connect(mapStateToProps)(PostEditor);
