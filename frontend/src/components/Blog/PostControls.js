import { post_to_url, summarize_content } from '../../library/format'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { change_edit_mode } from '../../redux/BlogActions'
import Toggle from '../Utility/Toggle';
import { update_post } from '../../redux/BlogActions'
import '../../styles/Blog/post-controls.css'

import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

export default function PostControls({post}) {
  const url = `${process.env.NEXT_PUBLIC_URL}${post_to_url(post)}` 
  const summary = summarize_content(post.content)
  const dispatch = useDispatch()
  const edit_mode = useSelector(store => store.BlogReducer.edit_mode)

  // Temporary
  const logged_in = true
  //const logged_in = useSelector(store => store.AdminReducer.logged_in)
  const edit_post_click = (e) => {
    dispatch(change_edit_mode(true))
  }
  const update_public = (e) => {
    dispatch(update_post({...post, public: !post.public}))
  }
  return (
    <div className="post-controls">
      <FacebookShareButton 
        url={url}
        quote={post.title + " from aaronbae.com"}
        className="media-button"
      >
        <FacebookIcon size={25} round={true} bgStyle={{fill: "#696867"}}/>
      </FacebookShareButton>
      <LinkedinShareButton 
        url={url}
        title={post.title + " from aaronbae.com"} 
        summary={summary}
        source="aaronbae.com"
        className="media-button"
        >
        <LinkedinIcon size={25} round={true} bgStyle={{fill: "#696867"}}/>
      </LinkedinShareButton>
      <TwitterShareButton 
        url={url}
        title={post.title}
        className="media-button"
        >
        <TwitterIcon size={25} round={true} bgStyle={{fill: "#696867"}}/>
      </TwitterShareButton>
      {!edit_mode && logged_in &&
        <button className="edit-button post-control-right" onClick={edit_post_click}>Edit Post</button>
      }
      {edit_mode && logged_in &&
        <Toggle checked={post.public} className="post-control-right" width="50px" click_behavior={update_public}/>
      }
  </div>
  )
}