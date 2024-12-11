import { useState } from 'react'
import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaPython,
  FaJava,
  FaBootstrap,
  FaDocker,
  FaCss3,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiVite,
  SiFlask,
  SiSpringboot,
  SiPostgresql,
  SiSqlite,
  SiMysql,
  SiKeras,
  SiTensorflow,
  SiPandas,
  SiFlutter,
  SiGoogleanalytics,
  SiVercel,
  SiRender,
  SiCnn,
  SiExpress,
  SiDart,
} from 'react-icons/si';

import './Projects.css'
import { cbta5, erpp, gym, taller, uthh } from '../../Assets';

type Project = {
  title: string
  role: string
  location: string
  date: string
  tasks: string[]
  technologies: string[] // Tecnologías utilizadas
  image: string
}

// Mapeo de tecnologías a logos
const technologyIcons: Record<string, JSX.Element> = {
  'React.js': <FaReact size={40} />,
  Vite: <SiVite size={40} />,
  Java: <FaJava size={40} />,
  TypeScript: <SiTypescript size={40} />,
  'Flask - Python': <SiFlask size={40} />,
  CSS: <FaCss3 size={40} />,
  Sentry: <FaDocker size={40} />,
  SQLServer: <SiSqlite size={40} />,
  Render: <SiRender size={40} />,
  Vercel: <SiVercel size={40} />,
  'Java - Spring Boot': <SiSpringboot size={40} />,
  Angular: <FaAngular size={40} />,
  Boostrap: <FaBootstrap size={40} />,
  PostgresSQL: <SiPostgresql size={40} />,
  Python: <FaPython size={40} />,
  TensorFlow: <SiTensorflow size={40} />,
  Keras: <SiKeras size={40} />,
  'React Native': <FaReact size={40} />,
  CNN: <SiCnn size={40} />,
  Pandas: <SiPandas size={40} />,
  'Express.js': <SiExpress size={40} />,
  Node: <FaNodeJs size={40} />,
  MySQL: <SiMysql size={40} />,
  Flutter: <SiFlutter size={40} />,
  Dart: <SiDart size={40} />,
  'Google Analytics': <SiGoogleanalytics size={40} />,
};
export default function Projects() {
  const projects: Project[] = [
    {
      title: 'EDUCONTROL – CBTA5',
      role: 'Software Engineer',
      location: 'Huejutla de Reyes, Hidalgo, México',
      date: 'September 2023 - December 2024',
      tasks: [
        'Design, development, and creation of a multi-platform school website.',
        'Implementation of an automated system for generating student credentials.',
        'Development of accessible solutions for managing access control to educational facilities and classrooms.',
      ],
      technologies: [
        'React.js',
        'Vite',
        'TypeScript',
        'Flask - Python',
        'CSS',
        'Sentry',
        'SQLServer',
        'Render',
        'Vercel',
      ],
      image: cbta5,
    },
    {
      title: 'ERPP Pachuca',
      role: 'Software Engineer',
      location: 'Pachuca, Hidalgo, México',
      date: 'February 2024 - April 2024',
      tasks: [
        'Data migration ensuring proper relation between historical and new records, optimizing structure and coherence.',
        'Integration of a system for efficient new entries with correct symbol and sign management.',
        'Enabled error correction features, improving incident management efficiency.',
      ],
      technologies: [
        'Java - Spring Boot',
        'Angular',
        'Boostrap',
        'PostgresSQL',
      ],
      image: erpp,
    },
    {
      title: 'Cooking Meat – UTHH',
      role: 'Software Engineer',
      location: 'Huejutla de Reyes, Hidalgo, México',
      date: 'June 2023 - August 2023',
      tasks: [
        'Developed a mobile app with a convolutional neural network to classify meat cooking levels.',
        'Implemented the app using React Native for mobile development.',
        'Built and trained a classification model using Python, TensorFlow, and Keras, deployed via Flask.',
      ],
      technologies: [
        'Flask - Python',
        'TensorFlow',
        'Keras',
        'React Native',
        'CNN',
        'Render',
        'Pandas',
      ],
      image: uthh,
    },
    {
      title: 'Access Control – Workshop',
      role: 'Software Engineer',
      location: 'Ciudad de México',
      date: 'December 2022 - March 2023',
      tasks: [
        'Developed a desktop system to manage workshop access control, focusing on attendance.',
        'Used Python with Keras and Pandas libraries to implement system functionalities.',
      ],
      technologies: [
        'Python',
        'Pandas',
        'Keras',
        'Express.js',
        'Node',
        'MySQL',
        'Vercel',
      ],
      image: taller,
    },
    {
      title: 'Gimnasio Strock',
      role: 'Software Engineer',
      location: 'Huejutla de Reyes, Hidalgo',
      date: 'September 2022 - December 2022',
      tasks: [
        'Developed a desktop system for managing membership payments with differentiated rates.',
        'Implemented a control system using a 6-digit code for attendance registration.',
        'Built the system using Flutter and Dart.',
      ],
      technologies: [
        'Flutter',
        'Dart',
        'Express.js',
        'SQLServer',
        'Render',
        'Google Analytics',
      ],
      image: gym,
    },
  ]

  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [showTechnologies, setShowTechnologies] = useState(false)

  const openInfoModal = (project: Project) => {
    setShowTechnologies(false)
    setSelectedProject(project)
  }

  const openTechnologiesModal = (project: Project) => {
    setShowTechnologies(true)
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  return (
    <div className="projects-container" id='projects'>
      <h1 className="projects-title">Professional Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h2 className="project-title">{project.title}</h2>
            <p className="project-date">{project.date}</p>
            <div className="project-buttons">
              <button
                className="btn info-btn"
                onClick={() => openInfoModal(project)}
              >
                Info
              </button>
              <button
                className="btn tech-btn"
                onClick={() => openTechnologiesModal(project)}
              >
                Technologies
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>
            <h2>{selectedProject.title}</h2>
            {showTechnologies ? (
              <div className="tech-logos">
                {selectedProject.technologies.map((tech, index) => (
                  <div key={index} className="tech-logo">
                    {technologyIcons[tech] || tech}
                  </div>
                ))}
              </div>
            ) : (
              <>
                <p>
                  <strong>Role:</strong> {selectedProject.role}
                </p>
                <p>
                  <strong>Location:</strong> {selectedProject.location}
                </p>
                <p>
                  <strong>Date:</strong> {selectedProject.date}
                </p>
                <ul>
                  {selectedProject.tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
