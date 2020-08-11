import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { format_post_content } from '../../library/format'
import { update_content, upload_image } from '../../redux/BlogActions'
import '../../styles/Blog/post-content.css'

export default function PostContent({post_id}) {
  const dispatch = useDispatch()
  const post = useSelector(store => store.BlogReducer.posts[post_id])
  const edit_mode = useSelector(store => store.BlogReducer.edit_mode)
  const [tooltip_y, setTooltipY] = useState(0)
  const [tooltip_x, setTooltipX] = useState(0)
  const [show, setShow] = useState(false)

  const default_to_div = (e) => {
    if(e.target.innerText.length<=1 && e.key==="Backspace"){
      e.target.innerHTML = "<div></div>"
      e.preventDefault()
    }
  }
  const remote_trigger = (e) => {
    document.getElementById("post-image-input").click()
  }
  const add_new_image = (e) => {
    let f = e.target.files[0]
    if(/^.*(png|jpg|jpeg)$/i.test(f.type)){
      console.log(tooltip_y)
      //dispatch(upload_image(f, posts[index]))
    }
  }
  const hide_tooltip = (e) => {
    setShow(false)
  }
  const update_tooltip = (e) => {
    console.log(e.target)
    if(e.target.innerHTML === "<br>" || (e.target.innerText===""&&e.target.innerHTML==="")){
      setShow(true)
      setTooltipY(e.target.offsetTop)
      setTooltipX(e.target.offsetLeft-130)
    } else {
      setShow(false)
    }
  }
  const change_content = (e) => {
    //const target = window.getSelection().getRangeAt(0).commonAncestorContainer
    //document.getElementsByClassName("post-content-editor")[0].click()
    
    dispatch(update_content(post, e.target.innerHTML))
  }
  return (
    <div className="post-content">
      <div className="tooltip-wrapper" style={{top: tooltip_y + "px", left: tooltip_x+"px"}}>
        <input type="file" name="file" id="post-image-input" onChange={add_new_image}/>
        <label htmlFor="post-image-input" 
          onMouseDown={remote_trigger}
          className={show ? "post-tooltip show":"post-tooltip"}>
          Add Image
        </label>
      </div>
      <div className="post-content-editor"
        contentEditable={edit_mode}
        suppressContentEditableWarning={true}
        data-placeholder={"What's on your mind?"}
        onKeyDown={default_to_div}
        onKeyUp={change_content}
        onClick={update_tooltip}
        onBlur={hide_tooltip}
        dangerouslySetInnerHTML={{
          __html: format_post_content(post)
        }}
      />
    </div>
  )
}