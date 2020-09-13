import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { 
  change_edit_mode, 
  fetch_post_by_id, 
  save_local_changes,
  delete_post
} from '../../redux/BlogActions'
import '../../styles/Blog/post-edit-controls.css'

export default function PostEditControls({post_id}) {
  const dispatch = useDispatch()
  const router = useRouter()
  const post = useSelector(store => store.BlogReducer.posts[post_id])
  
  const save_changes = (e) => {
    dispatch(save_local_changes(post))
  }

  const cancel_changes = (e) => {
    dispatch(change_edit_mode(false))
    dispatch(fetch_post_by_id(post_id))
  }

  const delete_curr_post = (e) => {
    dispatch(delete_post(post_id))
    router.push("/blog")
  }
  return (
    <div className="post-edit-controls">
      <div className="card-section-break" />
      <button className="post-edit-save" type="button" onClick={save_changes}>Save</button>
      <button className="post-edit-delete" type="button" onClick={delete_curr_post}>Delete</button>
      <button className="post-edit-cancel" type="button" onClick={cancel_changes}>Cancel</button>
    </div>
  )
}