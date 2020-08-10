import { useDispatch, useSelector } from 'react-redux'
import { update_content } from '../../redux/BlogActions'
import '../../styles/Blog/post-content.css'

export default function PostContent({post_id}) {
  const dispatch = useDispatch()
  const post = useSelector(store => store.BlogReducer.posts[post_id])
  const edit_mode = useSelector(store => store.BlogReducer.edit_mode)
  const change_content = (e) => {
    dispatch(update_content(post, e.target.innerHTML))
  }
  return (
    <div className="post-content">
      <div className="post-content-editor"
        contentEditable={edit_mode}
        suppressContentEditableWarning={true}
        data-placeholder={"What's on your mind?"}
        onKeyUp={change_content}
        dangerouslySetInnerHTML={{__html: post.content==="" ? null : post.content}}
      />
    </div>
  )
}