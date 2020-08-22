import Project from '../../components/Projects/Project'
import '../../styles/Projects/index.css'

export default function Projects() {
  return (
    <div id="projects-container">
      <div className="highlighted-projects">
        <Project 
          section_title="Featured Projects"
          title="AaronBae.com" 
          tech_tags="NextJS, Express, MongoDB" 
          github_url="https://github.com/aaronbae/aaronbae.com"
        >
          <div className="aaronbae-content">
            <img src="/projects/aaronbae.png" className="project-img" alt="aaronbae.com project screenshot" />
            <ul className="aaronbae-project-list">
              <li>A personal website built on NextJS and React</li>
              <li>Includes a custom blog feature that was built from ground up</li>
              <li>SEO functionality possible via NextJS</li>
              <li>Intended for collaborators and recruiters to learn more about me</li>
            </ul>
          </div>
        </Project>
      </div>
      <div className="non-highlighted-projects">
        <Project 
          title="HighCurve" 
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
          github_url="https://github.com/aaronbae/AnaQA"
        >
          <p>
            AnaQA is a project that merges together DecompRC and Dr.QA to create a different type
            of question answering system. Given a question in the form of an english sentence,
            it is able to answer them based on the data gathered from Wikipedia. 
          </p>
        </Project> 
      </div>
    </div>
  )
}