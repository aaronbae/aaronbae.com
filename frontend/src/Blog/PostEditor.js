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
    this.update_title = this.update_title.bind(this);
    this.update_content = this.update_content.bind(this);
    this.update_tags = this.update_tags.bind(this);
    this.save_changes = this.save_changes.bind(this);
    this.cancel_changes = this.cancel_changes.bind(this);
  }

  update_title(e) {
    e.stopPropagation();
    const { dispatch, selected_tags, selected_content } = this.props
    dispatch(update_local_changes(e.target.value, selected_content, selected_tags))
  }

  update_content(e) {
    e.stopPropagation();
    const { dispatch, selected_title, selected_tags } = this.props
    dispatch(update_local_changes(selected_title, e.target.value, selected_tags))
  }

  update_tags(e) {
    e.stopPropagation();
    const { dispatch, selected_title, selected_content  } = this.props
    dispatch(update_local_changes(selected_title, selected_content, e.target.value))
  }

  save_changes(e) {
    e.stopPropagation();
    const { dispatch, selected_post, posts  } = this.props
    var curr_post = posts[selected_post]
    dispatch(save_local_changes(curr_post))
  }

  cancel_changes(e) {
    e.stopPropagation();
    const { dispatch } = this.props
    dispatch(fetch_posts())
    dispatch(change_edit_mode(false))
  }
  
  render() {
    const { enterEditMode, edit_mode, selected_post, selected_title, selected_date, selected_tags, selected_content } = this.props
    return (
      <div className="row post-editor-container">
        {selected_post > -1 &&
          <div className={edit_mode ? "col post-editor-main-col hidden" : "col post-editor-main-col"}> 
            <div className="row title-row">
              <p className="h3">{selected_title}</p>
            </div>
            <div className="row information-row">
              <div className="col-5 no-padding">
                {selected_date}
              </div>
              <div className="col-7 no-padding">
                <div className="float-right">
                  <span className="tag">Tags : </span>
                  {selected_tags.map((item, index) =>
                    <span key={index} className={"tag " + item}>
                      {item + ", "}                  
                    </span>
                  )}
                  <span className="edit-button" onClick={() => enterEditMode(true)} >Edit Post</span>
                </div>
              </div>
            </div>
            <div className="row content-row">
              {selected_content}
            </div>
          </div>
        }
        {selected_post > -1 && 
          <div className={edit_mode ? "col post-editor-main-col" : "col post-editor-main-col hidden"}>
            <div className="row title-row">
              <input type="text"  defaultValue={selected_title} onChange={this.update_title}/>
            </div>
            <div className="row information-row">
              <div className="col-5 no-padding">
                {selected_date}
              </div>
              <div className="col-7 no-padding">
                <div className="float-right">
                  <span className="tag">Tags : </span>
                  {selected_tags.map((item, index) =>
                    <span key={index} className={"tag " + item}>
                      {item + ", "}                  
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="row content-row">
              <input type="text"  defaultValue={selected_content} onChange={this.update_content}/>
            </div> 
            <div className="row button-row">
              <button type="button" onClick={this.save_changes}>Save</button>
              <button type="button" onClick={this.cancel_changes}>Cancel</button>
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
  if(selected_post == -1){
    return {
      edit_mode: edit_mode,
      posts: posts,
      selected_post: -1,
      selected_title: "",
      selected_content: "",
      selected_tags: "",
      selected_date: ""
    }
  }
  let this_post = posts[selected_post]
  return {
    edit_mode: edit_mode,
    posts: posts,
    selected_post: selected_post,
    selected_title: this_post.title,
    selected_content: this_post.content,
    selected_tags: this_post.tags,
    selected_date: this_post.updatetime
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    update_title: (e)=>update_title(e),
    enterEditMode: (boolean_val)=>dispatch(change_edit_mode(boolean_val))
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(PostEditor);
