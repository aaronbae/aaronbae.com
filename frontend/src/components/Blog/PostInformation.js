import { format_date, raw_tags_to_array } from '../../library/format'
import { useDispatch, useSelector } from 'react-redux'
import { update_title, update_tags } from '../../redux/BlogActions'
import '../../styles/Blog/post-information.css'

export default function PostInformation({post_id}) {
  const dispatch = useDispatch()
  const post = useSelector(store => store.BlogReducer.posts[post_id])
  const edit_mode = useSelector(store => store.BlogReducer.edit_mode)

  const change_tags = (e) => {
    dispatch(update_tags(post, raw_tags_to_array(e.target.innerText)))
  }
  const change_title = (e) => {
    dispatch(update_title(post, e.target.innerText))
  }

  return (
    <div>
      <div className="post-header">
        <div>
          {format_date(post.createtime)}
        </div>
        <div className="post-tags">
          <span>Tags : </span>
          <div className="post-tag-editor"
            contentEditable={edit_mode} 
            suppressContentEditableWarning={true}
            onKeyUp={change_tags}
          > 
            {post.tags.join(", ")}
          </div>
        </div>
      </div>
      <div className="post-title" 
        contentEditable={edit_mode} 
        suppressContentEditableWarning={true}
        onKeyUp={change_title} 
        >
        {post.title}
      </div>
    </div>
  )
}