import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetch_public_posts } from '../../redux/BlogActions'
import PostPreview from '../../components/Blog/PostPreview'
import { posts_to_array } from '../../library/format'
import '../../styles/Blog/index.css'

export default function Blog() {
  const dispatch = useDispatch()
  let posts = useSelector(state => state.BlogReducer.posts)
  const skip = 0 // for now

  useEffect(() => {
    dispatch(fetch_public_posts(skip))
  }, [])
  
  return (
    <div id="blog-container">
      <div className="card-wrapper">
        <p className="card-title">What's New?</p>
        {posts && posts_to_array(posts).map((item, index) => 
          <PostPreview key={index} post={item} />
        )}
      </div>
    </div>
  )
}