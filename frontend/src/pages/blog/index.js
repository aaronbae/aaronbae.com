import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetch_public_posts } from '../../redux/BlogActions'
import PostPreview from '../../components/Blog/post-preview'
import '../../styles/Blog/blog.css'

export default function Blog() {
  const posts = []
  const dispatch = useDispatch()
  const skip = 0 // for now

  useEffect(() => {
    dispatch(fetch_public_posts(skip))
  }, [dispatch])

  return (
    <div id="blog-container">
      <div className="card-wrapper">
        <p className="card-title">What's New?</p>
        {posts.map((item, index) => 
          <PostPreview key={index} post_id={item._id} />
        )}
      </div>
    </div>
  )
}