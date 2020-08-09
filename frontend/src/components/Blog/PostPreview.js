import Link from 'next/link'
import { post_to_url, format_date, summarize_content } from '../../library/format'
import "../../styles/Blog/post-preview.css"

export default function PostPreview({post}) {
  const formatted_date = format_date(post.createtime)
  const summarized_content = summarize_content(post.content)
  const url = post_to_url(post)

  return (
    <Link href="/blog/[id]" as={url}>
      <div className="post-preview" >
        <div className="preview-date">{formatted_date}</div>
        <div className="preview-title">{post.title!==""?post.title:"(No Title)"}</div>
        <div>{summarized_content}</div>
        <div className="read-more">Read More</div>
      </div>
    </Link>
  )
}