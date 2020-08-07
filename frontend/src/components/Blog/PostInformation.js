import { format_date } from '../../library/format'
import '../../styles/Blog/post-information.css'

export default function PostInformation({post}) {
  return (
    <div>
      <div className="post-header">
        <div>
          {format_date(post.createtime)}
        </div>
        <div className="post-tags">
          <span>Tags : </span>
          {post.tags.map((item, index) =>
            <span key={index}>{item + ", "}</span>
          )}
        </div>
      </div>
      <div className="post-title">
        {post.title}
      </div>
    </div>
  )
}