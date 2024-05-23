import { useEffect, useState } from 'react';
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          As an aspiring full-stack developer, I've cultivated a robust skill set through rigorous academic coursework, personal projects, and self-directed learning.
          </p>
          <p align="LEFT">
            
Hey folks! So, as a full-stack developer, I've been keeping myself busy with a wide range of tech goodies. On the frontend side of things, I've been crafting sleek and responsive user interfaces using modern frameworks like React.js or Vue.js. Making sure everything looks great and works smoothly across different devices and browsers is my bread and butter.

But I don't stop there. On the backend, I've been cooking up some serious code magic with languages like  Python, and frameworks like  Django or flask. Building robust APIs, handling data storage and retrieval, DevOps and making sure everything runs efficiently – that's where I shine.

And let's not forget about the database layer. I've been cozying up to databases like PostgreSQL, MongoDB, or maybe even dabbling in some SQL or NoSQL action,information technology specialist, Networking and depending on the project's
          </p>
          <p>
          So yeah, that's me – a full-stack developer with a passion for crafting awesome software and making an impact. Let's build something amazing together!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;

