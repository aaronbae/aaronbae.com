import Project from '../../components/Projects/Project'
import '../../styles/Projects/highlighted-projects.css'

export default function HighlightedProjects(props) {
  return (
    <div className={`non-highlighted-projects ${props.className}`}>
      <Project 
        title="HighCurve"  
        title_url="https://github.com/aaronbae/HighCurve"
        github_url="https://github.com/aaronbae/HighCurve"
        tech_tags="MongoDB, YahooAPI" 
      >
        <p>
          Finance App is intended to be used as an analytical tool from the historical stock
          values. It automatically pulls daily Open-High-Low-Close (OHLC) values from Yahoo API, 
          and shows the users the stocks of their choosing.
        </p>
      </Project> 
      <Project 
        title="Human Dialogue" 
        private={true}
        tech_tags="Python, HuggingFace" 
        title_url="https://github.com/aaronbae/HumanDialogue"
        github_url="https://github.com/aaronbae/HumanDialogue"
      >
        <p>
          Humang Dialogue quantifies the information exchange within a conversation.
          We are using a BERT-based transformer models to identify question-answer pairs within a 
          transcript, and quantify them based on custom metrics. 
        </p>
      </Project> 
      <Project 
        title="AnaQA" 
        tech_tags="Python, Pytorch, HotpotQA" 
        title_url="https://github.com/aaronbae/AnaQA"
        github_url="https://github.com/aaronbae/AnaQA"
      >
        <p>
          AnaQA is a project that merges together DecompRC and Dr.QA to create a different type
          of question answering system. Given a question in the form of an english sentence,
          it is able to answer them based on the data gathered from Wikipedia. 
        </p>
      </Project> 
    </div>
  )
}