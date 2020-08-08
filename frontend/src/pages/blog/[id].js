import Head from 'next/head'
import { useSelector } from 'react-redux'
import PostInformation from '../../components/Blog/PostInformation'
import PostControls from '../../components/Blog/PostControls'
import PostContent from '../../components/Blog/PostContent'
import { 
  url_to_post_id, 
  summarize_content,
  post_to_url,
  find_image_from_post
} from '../../library/format'
import '../../styles/Blog/id.css'

function PostViewer() {
  const post = useSelector(store=> {
    const posts = store.BlogReducer.posts
    return posts[Object.keys(posts)[0]]
  })
  const description = summarize_content(post.content)
  const url = process.env.NEXT_PUBLIC_URL + post_to_url(post)
  const img = find_image_from_post(post)
  return (
    <div className="post-id">
      <Head>
        <title>{post.title}</title>
        <meta key="title" name="title" content={post.title} />
        <meta key="description" name="description" content={description} />
        <meta key="og:url" property="og:url" content={url} />
        <meta key="og:type" property="og:type" content="article" />
        <meta key="og:title" property="og:title" content={post.title} />
        <meta key="og:description" property="og:description" content={description} />
        {img !== "" && <meta key="og:image" property="og:image" content={img} />}
      </Head>
      {post && 
        <div className="card-wrapper"> 
          <PostInformation post={post}/>
          <PostControls post={post}/>
          <PostContent post={post}/>
        </div>
      }
  </div>
  )
}
export async function getServerSideProps(context) {
  const raw = await fetch(process.env.NEXT_PUBLIC_POST_URL+url_to_post_id(context.query.id))
  const res = await raw.json()
  const posts = {}
  posts[res.posts[0]._id] = res.posts[0]
  return {
    props: {
      initialReduxState: {
        BlogReducer: {
          posts: posts
        }
      }
    }
  }  
}
export default PostViewer;