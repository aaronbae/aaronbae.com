import { post_to_url, summarize_content } from '../../library/format'
import '../../styles/Blog/post-share.css'

import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

export default function PostShare({post}) {
  const url = `https://www.aaronbae.com${post_to_url(post)}` 
  const summary = summarize_content(post.content)
  return (
    <div>
      <FacebookShareButton 
        url={url}
        quote={post.title + " from aaronbae.com"}
        className="media-button"
      >
        <FacebookIcon size={20} round={true} bgStyle={{fill: "#696867"}}/>
      </FacebookShareButton>
      <LinkedinShareButton 
        url={url}
        title={post.title + " from aaronbae.com"} 
        summary={summary}
        source="aaronbae.com"
        className="media-button"
        >
        <LinkedinIcon size={20} round={true} bgStyle={{fill: "#696867"}}/>
      </LinkedinShareButton>
      <TwitterShareButton 
        url={url}
        title={post.title}
        className="media-button"
        >
        <TwitterIcon size={20} round={true} bgStyle={{fill: "#696867"}}/>
      </TwitterShareButton>
    </div>
  )
}