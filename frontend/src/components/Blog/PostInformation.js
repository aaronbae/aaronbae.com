import { format_date } from '../../library/format'
import { useSelector } from 'react-redux'
import '../../styles/Blog/post-information.css'

export default function PostInformation({post}) {
  const edit_mode = useSelector(store => store.BlogReducer.edit_mode)
  // ERROR FROM LINE 22 WHEN EDITABLE ENABLED
  // FIX THIS BY USING useSelector FUNCTION AND MAKING IT LISTEN TO THE CHANGED REDUX STATE
  // TO MAKE THIS WORK IT WOULD BE NICE TO CHANGE REDUX TO USE an object instead of an
  // array for posts
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
      <div className="post-title" contentEditable={edit_mode}>
        {post.title}
      </div>
    </div>
  )
}