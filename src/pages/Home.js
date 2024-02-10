import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>
          Hi, my name is Dat Phan
        </h2>
        <div className='prompt'>
          <p>I am a software developer that recently graduated from the University of Minnesota - Twin Cities and I majored in Computer Science.
            I first started out as someone who was interested in the business field and did a couple of internships and co-ops with local companies learning about how projects worked and coming up with ideas that would solve business problems.
            However, I have shifted to more of a technical skillset learning coding as a result of opportunity trends and my own personal goals.
            I am most interested in Software Engineering/Product Management/Cyber Security. </p>
          <a href='mailto:dattphann@gmail.com' target="_blank" rel="noopener noreferrer">
            <EmailIcon />
          </a>
          <a href="https://www.linkedin.com/in/datphann/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/Datcomx2" target="_blank" rel="noopener noreferrer">
            <GithubIcon />
          </a>
        </div>
      </div>
      
      <div className='skills'>
        <h2>Skills</h2>
        <ol className='list'>
          <li className='item'>
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, ExpressJS, GraphQL, ApolloServer,
              MySQL, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Pythons, C, TypeScript, Go</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home