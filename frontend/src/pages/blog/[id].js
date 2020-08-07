import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { fetch_post_by_id } from '../../redux/BlogActions'
import PostInformation from '../../components/Blog/PostInformation'
import PostShare from '../../components/Blog/PostShare'
import PostContent from '../../components/Blog/PostContent'
import { url_to_post_id } from '../../library/format'
import '../../styles/Blog/id.css'

export default function PostViewer() {
  const router = useRouter()
  const { id } = router.query
  const dispatch = useDispatch()
  useEffect(() => {
    if(router.asPath !== router.route){
      console.log(id)
      console.log(url_to_post_id(id))
      dispatch(fetch_post_by_id(url_to_post_id(id)))
    }
  }, [router])
  let post = useSelector(state => state.BlogReducer.posts[0])
  return (
    <div className="post-id">
      {post && 
        <div className="card-wrapper"> 
          <PostInformation post={post}/>
          <PostShare post={post}/>
          <PostContent post={post}/>
        </div>
      }
  </div>
  )
}