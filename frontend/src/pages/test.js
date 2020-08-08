export default function Test() {
  let paragraphs = []
  const handle = (e) => {
    console.log("HANDLING")
  }
  return (
    <div>
      {paragraphs.map((item, index)=>{
        <div key={index}>{item}</div>
      })}
    </div>
  )
}