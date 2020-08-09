import { useDispatch, useSelector } from 'react-redux'
import { isMyImageURL, convertMyImageURL } from '../../library/format'
import '../../styles/Blog/post-content.css'

export default function PostContent({post_id}) {
  const post = useSelector(store => store.BlogReducer.posts[post_id])
  const edit_mode = useSelector(store => store.BlogReducer.edit_mode)
  return (
    <div className="post-content">
      {post.content.map((i, key) => {
        if(isMyImageURL(i)){
          return <img key={key} 
            className="aws-image" 
            src={convertMyImageURL(i)} 
            alt="Loaded from AWS" /> 
        }
        else {
          return <div className="content-paragraph" key={key}>{i}</div>
        }
      })}
    </div>
  )
}