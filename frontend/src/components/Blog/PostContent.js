import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { update_content, upload_image } from '../../redux/BlogActions'
import '../../styles/Blog/post-content.css'

export default function PostContent({post_id}) {
  const dispatch = useDispatch()
  const post = useSelector(store => store.BlogReducer.posts[post_id])
  const edit_mode = useSelector(store => store.BlogReducer.edit_mode)
  const [tooltip_y, setTooltipY] = useState(0)
  const [show, setShow] = useState(false)

  const add_new_image = (e) => {
    let f = e.target.files[0]
    if(/^.*(png|jpg|jpeg)$/i.test(f.type)){
      console.log(tooltip_y, show)
      //dispatch(upload_image(f, posts[index]))
    }
  }
  const hide_tooltip = (e) => {
    setShow(false)
  }
  const update_tooltip = (e) => {
    setShow(true)
    console.log(document.getSelection())
  }
  const change_content = (e) => {
    dispatch(update_content(post, e.target.innerHTML))
  }
  return (
    <div className="post-content">
      <div className="tooltip-wrapper" style={{top: tooltip_y + "px" }}>
        <input type="file" name="file" id="post-image-input" onChange={add_new_image}/>
        <label htmlFor="post-image-input" className={show ? "post-tooltip show":"post-tooltip"}>
          Add Image
        </label>
      </div>
      <div className="post-content-editor"
        contentEditable={edit_mode}
        suppressContentEditableWarning={true}
        data-placeholder={"What's on your mind?"}
        onKeyUp={change_content}
        onFocus={update_tooltip}
        onBlur={hide_tooltip}
        dangerouslySetInnerHTML={{__html: post.content==="" ? null : post.content}}
      />
    </div>
  )
}