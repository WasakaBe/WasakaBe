import { foto2 } from '../../Assets'
import './About.css'

export default function About() {
  return (
    <div className="about-container" id="about">
      <div className="about-text">
        <h1 className="about-title">About Me</h1>
        <div className="about-content">
          <p>
            I am a Software Developer and Management Engineer with expertise in
            Frontend and Backend development. My solid foundation in software
            engineering allows me to design, develop, and implement innovative
            solutions for diverse projects, including mobile, desktop, and web
            applications.
          </p>
          <p>
            I specialize in applying advanced programming principles, design
            patterns, and best practices to create robust, scalable, and
            efficient systems. One of my notable achievements is the development
            of a convolutional neural network for artificial intelligence
            applications, which has deepened my expertise in machine learning
            and data science.
          </p>
          <p>
            Beyond my technical proficiency, I am highly skilled in team
            leadership and project management. I have successfully led
            development teams, fostering a collaborative and results-oriented
            environment. My passion for technology and continuous learning
            drives me to stay ahead of industry trends and deliver innovative,
            high-quality solutions that exceed expectations.
          </p>
        </div>
      </div>
      <div className="about-img">
        <img src={foto2} alt="Personal" />
      </div>
    </div>
  )
}
