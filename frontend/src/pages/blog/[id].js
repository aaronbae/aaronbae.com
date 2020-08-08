import Head from 'next/head'
import PostInformation from '../../components/Blog/PostInformation'
import PostShare from '../../components/Blog/PostShare'
import PostContent from '../../components/Blog/PostContent'
import { 
  url_to_post_id, 
  summarize_content,
  post_to_url,
  find_image_from_post
} from '../../library/format'
import '../../styles/Blog/id.css'

function PostViewer(data) {
  // TEMPORARY
  if(!data.hasOwnProperty('posts')) {
    data = {
      posts: [data],
      current_page: 1,
      total_pages: 1
    }
  } 
  const post = data.posts[0]
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
          <PostShare post={post}/>
          <PostContent post={post}/>
        </div>
      }
  </div>
  )
}
export async function getServerSideProps(context) {
  const raw = await fetch(process.env.NEXT_PUBLIC_POST_URL+url_to_post_id(context.query.id))
  const data = await raw.json()
  return {
    props: data
  }  
}
export default PostViewer;