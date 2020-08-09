import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { 
  fetch_posts,
  fetch_public_posts, 
  create_new_post 
} from '../../redux/BlogActions'
import PostPreview from '../../components/Blog/PostPreview'
import { posts_to_array } from '../../library/format'
import '../../styles/Blog/index.css'

export default function Blog() {
  const dispatch = useDispatch()
  const router = useRouter()
  const [new_post_redirect, setRedirect] = useState(false)
  const posts = useSelector(state => state.BlogReducer.posts)

  useEffect(()=>{
    if(new_post_redirect){
      setRedirect(false)
      const new_post_id = posts_to_array(posts)[0]._id
      router.push("/blog/[id]", `/blog/${new_post_id}`)
    }
  }, [posts])
  
  const logged_in = useSelector(store => store.AdminReducer.logged_in)
  const skip = 0 // for now

  useEffect(() => {
    if(logged_in) {
      dispatch(fetch_posts(skip))
    } else {
      dispatch(fetch_public_posts(skip))
    }
  }, [])

  const compose_new = (e) => {
    setRedirect(true)
    dispatch(create_new_post())
  }
  
  return (
    <div id="blog-container">
      <div className="card-wrapper">
        <div className="card-title blog-whats-new">
          <span>What's New?</span>
          {logged_in &&
            <span className="blog-compose" onClick={compose_new}>Compose</span>
          }
        </div>
        {posts && posts_to_array(posts).map((item, index) => 
          <PostPreview key={index} post={item} />
        )}
      </div>
    </div>
  )
}