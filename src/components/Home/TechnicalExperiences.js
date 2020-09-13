import '../../styles/Home/technical-experiences.css'
import TechnicalExperienceEntry from './TechnicalExperienceEntry';

export default function TechincalExperiences() {
  return (
    <div className="card-wrapper">
      <p className="card-title techincal-experience-title">Technical Experiences</p>
      <div className="tech-experience-entry-container">
        <TechnicalExperienceEntry 
          logo="/icons/uci.png"
          logo_alt="university of california, irvine logo"
          position="Computer Science Researcher"
          company="University of California, Irvine"
          date_formatted="March 2020 - Present"
          url="https://uci.edu/"
        >
          <div>
            <p className="role-title">
              <a href="https://www.ics.uci.edu/~smyth/" className="experience-external-links" target="_blank" title="More About Professor Smyth">
                Professor Padhraic Smyth Research:
              </a>
            </p>
            <p>
              As a graduate researcher for Professor Padhraic Smyth, I am working 
              on ways to analyze dialogue dataset. Datasets like Switchboard Corpus and ICSI 
              Meeting Recording Corpus contains turn-by-turn transcripts from a conversation 
              along with a few semantic annotations. The goal of the project is to analyze this
              conversational dataset to develop a method to quantify the quality of information 
              exchange.
            </p>
          </div>
        </TechnicalExperienceEntry>
        <div className="card-section-break" />
        <TechnicalExperienceEntry 
          logo="/icons/uw_logo.png"
          logo_alt="university of washington logo"
          position="Computer Science Researcher"
          company="University of Washington"
          date_formatted="Jun 2018 - Jun 2019"
          url="https://www.washington.edu/"
        >
          <div>
            <p className="role-title">
              <a href="https://math.washington.edu/events/series/washington-experimental-mathematics-lab" 
                className="experience-external-links" target="_blank" 
                title="More About Washington Experimental Mathematics Lab">
                Washington Experimental Mathematics Lab:
              </a>
            </p>
            <p>
              I was invited to work with Professor Christopher Hoffman to 
              participate on his Mathematics in Gerrymandering Project. He works to analyze 
              search the state space for the ways to draw out the districts. We used C++ and  
              Python as the engine of the project, and built NodeJS servers to distribute, 
              visualize, and explain the political data we mined.
            </p>
          </div>
          <div>
            <p className="role-title">Assitantship to Emisa Nateigh, Ph.D:</p>
            <p>
              As a lab assistant to Emisa Nateigh, a Ph.D student at the 
              University of Washington Foster School of business, I helped to create a 
              machine learning system to perform Multi-Tasking Gaussian Process learning 
              algorithm on the collected medical data. Mainly, used Python and NumPy to 
              carry out the statistical process. Used MatplotLib and D3.js to visualize the
              information.
            </p>
          </div>
        </TechnicalExperienceEntry>
        <div className="card-section-break" />
        <TechnicalExperienceEntry 
          logo="/icons/dapper.jpg"
          logo_alt="dapper company logo"
          position="Backend Software Engineer"
          company="Dapper Grooming"
          date_formatted="Jun 2018 - August 2019"
          url="https://dappergrooming.co/"
        >
          <div>
            <p className="role-title">
              <a href="https://dappergrooming.co/" 
                className="experience-external-links" target="_blank" 
                title="More About Dapper Grooming - Seattle">
                Backend Development Team:
              </a>
            </p>
            <p>
              Continuing my intersets in backend web development, I worked with a 
              University of Washington alumn who was starting a company called Dapper. The 
              company needed a basic web based platform to launch their project, and I helped
              them by creating an AWS server to handle their client traffic.
            </p>
          </div>
        </TechnicalExperienceEntry>
        <div className="card-section-break" />
        <TechnicalExperienceEntry 
          logo="/icons/crowdcow.jpg"
          logo_alt="crowd cow company logo"
          position="Software Engineering Intern"
          company="Crowd Cow"
          date_formatted="Jun 2017 - August 2017"
          url="https://www.crowdcow.com/"
        >
          <div>
            <p className="role-title">
              <a href="https://www.crowdcow.com/" 
                className="experience-external-links" target="_blank" 
                title="More About Crowd Cow">
                Frontend Developer:
              </a>
            </p>
            <p>
              As a frontend developer, I worked on improving CrowdCow's private
              e-commerce platform by changing the client purchase UI pipeline. Also, 
              worked on various features like in-house data visualization dashboard that 
              displays company statistics.
            </p>
          </div>
          <div>
            <p className="role-title">
              <a href="https://www.crowdcow.com/" 
                className="experience-external-links" target="_blank" 
                title="More About Crowd Cow">
                Backend Developer:
              </a>
            </p>
            <p>
              As a backend developer, I worked on middlman the information 
              between the database and the client servers. Main technologies that I used 
              were MySQL, Ruby on Rails, Git, Bundler, RuboCop, Stripe, and Puma.
            </p>
          </div>
        </TechnicalExperienceEntry>
      </div>
    </div>
  )
}