import './Skill.css';
import {
  FaReact,
  FaVuejs,
  FaAngular,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaDocker,
  FaGithub,
} from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiFlask, SiSpringboot, SiMysql, SiMongodb, SiPostgresql, SiVercel, SiFlutter, SiDjango } from 'react-icons/si';

export default function Skill() {
  return (
    <div className="skill-container" id='skills'>
      <h1 className="skill-title">My Skills</h1>
      
      <div className="skill-section">
        <h2>Programming Languages</h2>
        <div className="skill-grid">
          <div className="skill-item"><SiJavascript size={40} /> JavaScript</div>
          <div className="skill-item"><SiTypescript size={40} /> TypeScript</div>
          <div className="skill-item"><FaPython size={40} /> Python</div>
          <div className="skill-item"><FaJava size={40} /> Java</div>
          <div className="skill-item"><SiFlutter size={40} /> Dart</div>
        </div>
      </div>

      <div className="skill-section">
        <h2>Frameworks & Libraries</h2>
        <div className="skill-grid">
          <div className="skill-item"><FaReact size={40} /> React.js</div>
          <div className="skill-item"><FaVuejs size={40} /> Vue.js</div>
          <div className="skill-item"><FaAngular size={40} /> Angular</div>
          <div className="skill-item"><FaNodeJs size={40} /> Node.js</div>
          <div className="skill-item"><SiFlask size={40} /> Flask</div>
          <div className="skill-item"><SiSpringboot size={40} /> Spring Boot</div>
          <div className="skill-item"><SiDjango size={40} /> Django</div>
        </div>
      </div>

      <div className="skill-section">
        <h2>Databases</h2>
        <div className="skill-grid">
          <div className="skill-item"><SiMysql size={40} /> MySQL</div>
          <div className="skill-item"><SiPostgresql size={40} /> PostgreSQL</div>
          <div className="skill-item"><SiMongodb size={40} /> MongoDB</div>
        </div>
      </div>

      <div className="skill-section">
        <h2>Tools</h2>
        <div className="skill-grid">
          <div className="skill-item"><FaGitAlt size={40} /> Git</div>
          <div className="skill-item"><FaGithub size={40} /> GitHub</div>
          <div className="skill-item"><FaDocker size={40} /> Docker</div>
          <div className="skill-item"><SiVercel size={40} /> Vercel</div>
        </div>
      </div>

      <div className="skill-section">
        <h2>Soft Skills</h2>
        <ul className="soft-skill-list">
          <li>Leadership</li>
          <li>Team Collaboration</li>
          <li>Problem Solving</li>
          <li>Effective Communication</li>
        </ul>
      </div>
    </div>
  );
}