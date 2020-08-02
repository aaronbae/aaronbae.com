import React, { Component } from 'react';
import { format_date } from '../Utils/HelperFunctions';

// Redux handlers
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  fetch_posts,
  update_post
} from '../Redux/BlogActions'

import {
  change_edit_mode,
  save_local_changes,
  delete_post
} from '../Redux/AdminActions'


import { 
  isMyImageURL,
  convertMyImageURL
} from '../Utils/HelperFunctions';

import PublicToggle from './PublicToggle';
import ContentEditor from './ContentEditor';
import './PostEditor.scss';

class PostEditor extends Component {
  constructor(props) {
    super(props);
    this.enterEditMode = this.enterEditMode.bind(this);
    this.update_title = this.update_title.bind(this);
    this.update_tags = this.update_tags.bind(this);
    this.save_changes = this.save_changes.bind(this);
    this.cancel_changes = this.cancel_changes.bind(this);
    this.handle_delete_button = this.handle_delete_button.bind(this);

    this.title_input_ref = React.createRef();
  }
  componentDidMount() {
    window.scrollTo(0, 0) // Need to scroll to top if coming from /blog
  }
  componentDidUpdate() {
    // Resize title
    let dom = this.title_input_ref.current
    if(dom){
      dom.style.height = "0px"
      dom.style.height = (dom.scrollHeight+1) + "px"
    }
    
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
              <p className="plain-title">{post.title}</p>
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
            <div className="row content-row">
              {post.content.map((i, key) => {
                if(isMyImageURL(i)){
                  return <img key={key} className="aws-image" src={convertMyImageURL(i)} alt="Loaded from AWS" /> 
                } else {
                  return <div className="plain-content content-paragraph" key={key}>{i}</div>
                }
              })}
            </div>
          </div>
        }
        {index > -1 && 
          <div className={edit_mode ? "col post-editor-main-col" : "col post-editor-main-col hidden"}>
            <div className="row title-row">
              <textarea ref={this.title_input_ref} value={post.title} onChange={this.update_title} placeholder="Your Title..."/>
            </div>
            <div className="row information-row">
              <div className="col-sm-12 col-md-5 no-padding">
                {formatted_date}
              </div>
              <div className="col-sm-12 col-md-7 no-padding">
                <div className="row">
                  <div className="col-sm-12 offset-lg-3 col-lg-9 offset-xl-5 col-xl-7">
                    <span className="tags-label ">Tags : </span>
                    <input  className="tags-input" type="text" value={post.tags} onChange={this.update_tags} placeholder="tag, tag, ..."/>                  
                    <span className="toggle-label">Public: </span> 
                    <PublicToggle />
                  </div>
                </div>
              </div>
            </div>
            
            <ContentEditor />
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
