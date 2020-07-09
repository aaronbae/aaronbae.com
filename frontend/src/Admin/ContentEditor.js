import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { 
  isMyImageURL,
  convertMyImageURL
} from '../Utils/HelperFunctions';
import {
  add_new_paragraph,
  update_post,
  remove_paragraph
} from '../Redux/BlogActions'
import {
  upload_image
} from '../Redux/AdminActions'

import './ContentEditor.scss';


class ContentEditor extends Component {
  constructor(props) {
    super(props);
    
    this.update_content = this.update_content.bind(this);
    this.key_down = this.key_down.bind(this);
    this.handle_focus = this.handle_focus.bind(this);
    this.handle_blur = this.handle_blur.bind(this);
    this.handle_add_image_button = this.handle_add_image_button.bind(this);

    this.image_key_down = this.image_key_down.bind(this);

    this.state = {
      focus_index: -1,
      image_div_show: false,
      image_div_y: 0,
      post_update_focus_paragraph_index: 0,
      post_update_focus_character_index: 0
    }
  }
  focus(paragraph, character) {
    let needs_focus = document.getElementsByClassName("post-editor-paragraph")[paragraph] 
    console.log("FOCUS")
    let temp = document.getElementsByClassName("post-editor-paragraph")
    console.log("[ "+ paragraph + " / " +(temp.length.toString())+ " ]")
    needs_focus.focus()
    if(needs_focus.nodeName==="TEXTAREA"){
      character = Math.min(character, needs_focus.innerHTML.length)
      needs_focus.setSelectionRange(character,character)
    } 
  }

  componentDidUpdate(prevProps) {
    const { posts, index, edit_mode } = this.props
    let prev_posts = prevProps.posts

    // Resize title and content input
    Array.from(document.getElementsByClassName("resize-required")).forEach((e)=>{
      e.style.height = "0px"
      e.style.height = (e.scrollHeight+1) + "px"
    })
    console.log("UPDATE")
    console.log(prev_posts[index].content.length + " > " + posts[index].content.length)
    // re-focus after paragraph creation or deletion
    if ( edit_mode && index !== -1 && prev_posts.length > 0 
                  && posts[index].content.length !== prev_posts[index].content.length) {
      this.focus(this.state.post_update_focus_paragraph_index, this.state.post_update_focus_character_index)
    }
  }
  image_key_down(e) {
    const { posts, dispatch, index } = this.props
    let num_paragraphs = parseInt(posts[index].content.length)
    let paragraph_index = parseInt(e.target.getAttribute("index"))
    
    if(e.key === "Enter"){
      e.stopPropagation();
      e.preventDefault() // this prevents update_content
      dispatch(add_new_paragraph(index, paragraph_index, ""))  
      this.setState({
        post_update_focus_paragraph_index: paragraph_index + 1,
        post_update_focus_character_index: 0
      })    
    } 
    else if(e.key === "Backspace" || e.key === "Delete"){
      e.stopPropagation();
      e.preventDefault() // this prevents update_content
      dispatch(remove_paragraph(index, paragraph_index)) 
      this.setState({
        post_update_focus_paragraph_index: paragraph_index < num_paragraphs ? paragraph_index : Math.max(0, paragraph_index - 1),
        post_update_focus_character_index: 0
      })    
    } 
    else if (e.key === "ArrowUp" && paragraph_index > 0){
      e.stopPropagation();
      e.preventDefault() // this prevents update_content
      this.focus(paragraph_index - 1, 0)
    } 
    else if (e.key === "ArrowDown" && paragraph_index < num_paragraphs - 1){
      e.stopPropagation();
      e.preventDefault() // this prevents update_content
      this.focus(paragraph_index + 1, 0)
    } 
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
      this.setState({
        post_update_focus_paragraph_index: paragraph_index + 1,
        post_update_focus_character_index: 0
      })    
    } 
    else if(e.key === "Backspace" && cursor_index === 0 && paragraph_index > 0){
      e.stopPropagation();
      e.preventDefault() // this prevents update_content
      let merged_content = [...posts[index].content]
      merged_content[paragraph_index - 1] = merged_content[paragraph_index - 1] + current_paragraph
      dispatch(update_post({...posts[index], content: merged_content}, index)) 
      dispatch(remove_paragraph(index, paragraph_index)) 
      this.setState({
        post_update_focus_paragraph_index: paragraph_index - 1,
        post_update_focus_character_index: merged_content[paragraph_index - 1].length - current_paragraph.length
      })    
    } 
    else if (e.key === "Delete" && cursor_index === current_paragraph.length && paragraph_index < num_paragraphs - 1){
      e.stopPropagation();
      e.preventDefault() // this prevents update_content
      let merged_content = [...posts[index].content]
      merged_content[paragraph_index] = current_paragraph + merged_content[paragraph_index + 1] 
      dispatch(update_post({...posts[index], content: merged_content}, index)) 
      dispatch(remove_paragraph(index, paragraph_index + 1))
      this.setState({
        post_update_focus_paragraph_index: paragraph_index,
        post_update_focus_character_index: current_paragraph.length
      })    
    } 
    else if (e.key === "ArrowUp" && cursor_index === 0 && paragraph_index > 0){
      e.stopPropagation();
      e.preventDefault() // this prevents update_content
      this.focus(paragraph_index - 1, cursor_index)
    } 
    else if (e.key === "ArrowDown" && cursor_index === current_paragraph.length && paragraph_index < num_paragraphs - 1){
      e.stopPropagation();
      e.preventDefault() // this prevents update_content
      this.focus(paragraph_index + 1, cursor_index)
    } 
    else if (e.key === "ArrowLeft" && cursor_index === 0 && paragraph_index > 0){
      e.stopPropagation();
      e.preventDefault() // this prevents update_content
      this.focus(paragraph_index - 1, Number.MAX_VALUE)
    } 
    else if (e.key === "ArrowRight" && cursor_index === current_paragraph.length && paragraph_index < num_paragraphs - 1){
      e.stopPropagation();
      e.preventDefault() // this prevents update_content
      this.focus(paragraph_index + 1, 0)
    } 
  }
  handle_blur(e) {
    this.setState({
      image_div_show: false,
    })
  }
  handle_focus(e) {
    this.setState({
      focus_index: e.target.getAttribute("index"),
      image_div_show: e.target.value.length === 0,
      image_div_y: e.target.getBoundingClientRect().top - 55
    })
  }
  handle_add_image_button(e) {
    const { posts, index, dispatch } = this.props
    let f = e.target.files[0]
    if(f.type.startsWith("image")){
      dispatch(upload_image(f, posts[index], index, this.state.focus_index))
    }
  }

  update_content(e) {
    e.stopPropagation();
    const { dispatch, posts, index } = this.props
    var new_content = [...posts[index].content]
    new_content[e.target.getAttribute("index")] = e.target.value
    dispatch(update_post({...posts[index], content: new_content}, index)) 
  }

  render() {
    const { index, posts } = this.props
    let post = index !== -1? posts[index]: {content: []}
    return (
      <div className="row content-editor-container content-row ">
        <div className="add-image-div" style={{top: this.state.image_div_y + "px" }}>
          <input type="file" name="file" className="file-selector" id="file-selector" onChange={this.handle_add_image_button}/>
          <label htmlFor="file-selector" className={this.state.image_div_show ? "add-file-label show":"add-file-label"}>
            <img className="add-file-img" src="assets/icons/plus-sign.png" alt="Add Button" />
          </label>
        </div>
        {post.content.map((i, key) => {
          if(isMyImageURL(i)){
            return <div key={key} index={key} tabIndex={key} className="post-editor-paragraph aws-image-wrapper-in-content-editor" 
                    onKeyDown={this.image_key_down} > 
                    <img className="aws-image " src={convertMyImageURL(i)} alt="Loaded from AWS" /> 
                  </div>
          }
          else {
            // post-editor-paragrph : used to manage focusing
            // content-paragraph    : used to match style with paragraphs in PostEditor
            return <textarea key={key} index={key} tabIndex={key} className="content-editor-text-area resize-required post-editor-paragraph content-paragraph" value={i} 
                    onChange={this.update_content} 
                    onKeyDown={this.key_down}
                    onFocus={this.handle_focus}
                    onBlur={this.handle_blur}
                    placeholder={key===0?"What's on your Mind?":""}/>
          }
          
        })}
      </div> 
    )
  }
}

ContentEditor.propTypes = {
  index: PropTypes.number.isRequired,
  posts: PropTypes.array.isRequired,
  edit_mode: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  const { selected_post, edit_mode } = state.AdminReducer
  const { posts } = state.BlogReducer
  return { 
    index: selected_post,
    posts: posts,
    edit_mode: edit_mode
  }
}

export default connect(mapStateToProps)(ContentEditor);
