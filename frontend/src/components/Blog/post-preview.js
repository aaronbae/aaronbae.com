export default function PostPreview() {
  function handlePostClick(e) {
    console.log(e.target)
  }
  return (
    <div className="post-preview-container" onClick={handlePostClick}>
      <div className="date">{formatted_date}</div>
      <div className="title">{title}</div>
      <div>{summarized_content}</div>
      <div className="read-more">Read More</div>
    </div>
  )
}