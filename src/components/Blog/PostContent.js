import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { format_post_content, create_img_element } from '../../library/format'
import { update_content } from '../../redux/BlogActions'
import '../../styles/Blog/post-content.css'

export default function PostContent({post_id}) {
  const dispatch = useDispatch()
  const post = useSelector(store => store.BlogReducer.posts[post_id])
  const edit_mode = useSelector(store => store.BlogReducer.edit_mode)
  const wrapper = useRef(null)
  const tooltip = useRef(null)

  const get_caret_element = () => {
    const selection = window.getSelection()
    if(selection.rangeCount){
      return selection.getRangeAt(0).commonAncestorContainer
    } 
    return null
  }
  const hide_tooltip = () => {
    tooltip.current.classList.remove("show")
  }
  const update_caret_div = () => {
    const element = get_caret_element()
    if(edit_mode && element && element.nodeType === 1 && element.childElementCount <= 1){
      wrapper.current.style.top = element.offsetTop+"px"
      wrapper.current.style.left = element.offsetLeft-130+"px"
      tooltip.current.classList.add("show")
    } else {
      hide_tooltip()
    }
  }
  const remote_trigger = () => {
    // remote trigger, because actual input is invisible
    const element = get_caret_element()
    if(element){
      element.innerHTML = process.env.NEXT_PUBLIC_IMAGE_MARKER
    }
    document.getElementById("post-image-input").click()
  }
  const find_image_marker = () => {
    const editor = document.getElementById("post-content-editor")
    const children = editor.children
    for(let i=0; i < children.length; i++){
      if(children[i].innerHTML===process.env.NEXT_PUBLIC_IMAGE_MARKER){
        return children[i]
      }
    }
    return null
  }
  const add_new_image = (e) => {
    let f = e.target.files[0]
    let element = find_image_marker()
    const editor = document.getElementById("post-content-editor")
    if(element && f && /^.*(png|jpg|jpeg)$/i.test(f.type)){
      const data = new FormData() 
      data.append('file', f)
      fetch(process.env.NEXT_PUBLIC_FILE_URL + 'upload', {
        method: 'POST',
        body: data
      }).then(res => res.json())
      .then(res => {
        element.innerHTML = create_img_element(res.url)
        dispatch(update_content(post, editor.innerHTML))
      })
    }
  }
  const default_to_divs = (e) => {
    // Empty content defaults to emtpy divs
    if(e.target.innerText.length<=1 && e.key==="Backspace"){
      e.target.innerHTML = "<div></div>"
      e.preventDefault()
    }
  }
  const change_content = (e) => {
    update_caret_div()
    dispatch(update_content(post, e.target.innerHTML))
  }
  return (
    <div className="post-content">
      <div id="post-tooltip-wrapper" ref={wrapper}>
        <input type="file" name="file" id="post-image-input" onChange={add_new_image}/>
        <label ref={tooltip} htmlFor="post-image-input" onMouseDown={remote_trigger} className="post-tooltip">
          Add Image
        </label>
      </div>
      <div id="post-content-editor"
        contentEditable={edit_mode}
        suppressContentEditableWarning={true}
        data-placeholder={"What's on your mind?"}
        onKeyDown={default_to_divs}
        onKeyUp={change_content}
        onClick={update_caret_div}
        onBlur={hide_tooltip}
        dangerouslySetInnerHTML={{
          __html: format_post_content(post)
        }}
      />
    </div>
  )
}