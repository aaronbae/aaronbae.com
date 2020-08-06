import { format_date, summarize_content } from '../../library/format'

export default function PostPreview({post}) {
  let formatted_date = format_date(post.createtime)
  let summarized_content = summarize_content(post.content)
  
  function handlePostClick(e) {
    console.log("post-preview")
    console.log(e.target)
  }

  return (
    <div className="post-preview-container" onClick={handlePostClick}>
      <div className="date">{formatted_date}</div>
      <div className="title">{post.title}</div>
      <div>{summarized_content}</div>
      <div className="read-more">Read More</div>
    </div>
  )
}