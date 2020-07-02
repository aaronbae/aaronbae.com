import React, { Component } from 'react';
import { format_date } from '../Utils/HelperFunctions';

// Redux handlers
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  add_new_paragraph,
  fetch_posts,
  update_post,
  remove_paragraph
} from '../Redux/BlogActions'

import {
  change_edit_mode,
  save_local_changes,
  delete_post
} from '../Redux/AdminActions'


import PublicToggle from './PublicToggle';
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

    this.key_down = this.key_down.bind(this);
  }
  componentDidUpdate() {
    console.log()
    // Resize title and content input
    Array.from(document.getElementsByClassName("resize-required")).forEach((e)=>{
      e.style.height = "0px"
      e.style.height = (e.scrollHeight+1) + "px"
    })
  }

  enterEditMode(e) {
    e.stopPropagation();
    const { dispatch } = this.props
    dispatch(change_edit_mode(true))
  }

  update_title(e) {
    e.stopPropagation();
    const { dispatch, posts, index } = this.props
    dispatch(update_post({...posts[index], title: e.target.value}, index)) 
  }

  key_down(e) {
    const { posts, dispatch, index } = this.props
    let num_paragraphs = parseInt(posts[index].content.length)
    let paragraph_index = parseInt(e.target.getAttribute("index"))
    let current_paragraph = e.target.value
    let cursor_index = parseInt(e.target.selectionStart)

    if(e.key === "Enter"){
      e.stopPropagation();
      e.preventDefault() // this prevents update_content
      let staying_content = [...posts[index].content]
      staying_content[paragraph_index] = current_paragraph.substring(0, cursor_index)
      let created_content = current_paragraph.substring(cursor_index)
      dispatch(update_post({...posts[index], content: staying_content}, index)) 
      dispatch(add_new_paragraph(index, paragraph_index, created_content))      
    } 
    else if(e.key === "Backspace" && cursor_index === 0 && paragraph_index > 0){
      e.stopPropagation();
      e.preventDefault() // this prevents update_content
      let merged_content = [...posts[index].content]
      merged_content[paragraph_index - 1] = merged_content[paragraph_index - 1] + current_paragraph
      dispatch(update_post({...posts[index], content: merged_content}, index)) 
      dispatch(remove_paragraph(index, paragraph_index))
    } 
    else if (e.key === "Delete" && cursor_index === current_paragraph.length && paragraph_index < num_paragraphs - 1){
      e.stopPropagation();
      e.preventDefault() // this prevents update_content
      let merged_content = [...posts[index].content]
      merged_content[paragraph_index] = current_paragraph + merged_content[paragraph_index + 1] 
      dispatch(update_post({...posts[index], content: merged_content}, index)) 
      dispatch(remove_paragraph(index, paragraph_index + 1))
    } 
    else if (e.key === "ArrowUp" && cursor_index === 0 && paragraph_index > 0){
      e.stopPropagation();
      e.preventDefault() // this prevents update_content
      console.log(e.key)
    } 
    else if (e.key === "ArrowDown" && cursor_index === current_paragraph.length && paragraph_index < num_paragraphs - 1){
      e.stopPropagation();
      e.preventDefault() // this prevents update_content
      console.log(e.key)
    } 
    else if (e.key === "ArrowLeft" && cursor_index === 0 && paragraph_index > 0){
      e.stopPropagation();
      e.preventDefault() // this prevents update_content
      console.log(e.key)
    } 
    else if (e.key === "ArrowRight" && cursor_index === current_paragraph.length && paragraph_index < num_paragraphs - 1){
      e.stopPropagation();
      e.preventDefault() // this prevents update_content
      console.log(e.key)
    } 
  }

  update_content(e) {
    e.stopPropagation();
    const { dispatch, posts, index } = this.props
    var new_content = [...posts[index].content]
    new_content[e.target.getAttribute("index")] = e.target.value
    dispatch(update_post({...posts[index], content: new_content}, index)) 
  }

  update_tags(e) {
    e.stopPropagation();
    const { dispatch, posts, index } = this.props
    dispatch(update_post({...posts[index], tags: e.target.value.split(',')}, index)) 
  }

  save_changes(e) {
    e.stopPropagation();
    const { dispatch, posts, index  } = this.props
    dispatch(save_local_changes(posts[index]))
  }

  cancel_changes(e) {
    e.stopPropagation();
    const { dispatch  } = this.props
    dispatch(fetch_posts())
    dispatch(change_edit_mode(false))
  }

  handle_delete_button(e) {
    e.stopPropagation();
    const { dispatch, posts, index } = this.props
    dispatch(delete_post(posts[index]['_id']))
  }
  
  render() {
    const { edit_mode, logged_in, index, posts } = this.props
    let formatted_date = ""
    let post = {}
    if( index !== -1 ) {
      post = posts[index]
      formatted_date = format_date(post.createtime)
    }
    return (
      <div className="row post-editor-container">
        {index > -1 &&
          <div className={edit_mode ? "col post-editor-main-col hidden" : "col post-editor-main-col"}> 
            <div className="row title-row">
              <p className="h3">{post.title}</p>
            </div>
            <div className="row information-row">
              <div className="col-5 no-padding">
                {formatted_date}
              </div>
              <div className="col-7 no-padding">
                <div className="float-right">
                  <span className="tags-label">Tags : </span>
                  {post.tags.map((item, index) =>
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
              {post.content.map((i, key) => {
                return <div className="content-paragraph" key={key}>{i}</div>
              })}
            </div>
          </div>
        }
        {index > -1 && 
          <div className={edit_mode ? "col post-editor-main-col" : "col post-editor-main-col hidden"}>
            <div className="row title-row">
              <textarea className="resize-required h3" value={post.title} onChange={this.update_title} placeholder="Your Title..."/>
            </div>
            <div className="row information-row">
              <div className="col-5 no-padding">
                {formatted_date}
              </div>
              <div className="col-7 no-padding">
                <div className="float-right">
                  <span className="tags-label">Tags : </span>
                  <input  className="tags-input" type="text" value={post.tags} onChange={this.update_tags} placeholder="tag, tag, ..."/>
                </div>
              </div>
            </div>
            <div className="row toggle-row">
              <div className="offset-5 col-7 no-padding">
                <div className="float-right">
                  <span>Public: </span> 
                  <div className="toggle-wrapper">
                    <PublicToggle />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="row content-row">
              {post.content.map((i, key) => {
                return <textarea key={key} index={key} className="resize-required" value={i} 
                       onChange={this.update_content} 
                       onKeyDown={this.key_down}
                       placeholder={key===0?"What's on your Mind?":""}/>
                
              })}
            </div> 
            <div className="row button-row">
              <div>
                <button className="save-button" type="button" onClick={this.save_changes}>Save</button>
                <button className="delete-button" type="button" onClick={this.handle_delete_button}>Delete</button>
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
  logged_in: PropTypes.bool.isRequired,
  edit_mode: PropTypes.bool.isRequired,
  posts: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
}

function mapStateToProps(state) {
  const { edit_mode, selected_post } = state.AdminReducer
  const { posts } = state.BlogReducer
  return {
    logged_in: state.AdminReducer.logged_in,
    edit_mode: edit_mode,
    posts: posts,
    index: selected_post
  }
}

export default connect(mapStateToProps)(PostEditor);
