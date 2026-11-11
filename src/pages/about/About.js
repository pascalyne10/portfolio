import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import './About.css';

export default function About() {
  return (
    <div className='aboutMain'>
      <div className='aboutHeading'>
        
        <div className='aboutText'>
          <p className='aboutGreeting'>Hello, I'm Pascaline Mahoro</p>

          <h1>
            Full Stack Developer &amp; <em>Project Manager</em>
          </h1>

          <p className='aboutBio'>
            I build, design, and maintain modern web and app projects from concept
            to deployment. I also oversee the planning, monitoring, execution and
            completion of end-to-end projects.
          </p>

        
          <div className='aboutStats'>
            <div className='statItem'>
              <span className='statNum'>3<span>+</span></span>
              <span className='statLabel'>Years Exp.</span>
            </div>
            <div className='statItem'>
              <span className='statNum'>2<span>+</span></span>
              <span className='statLabel'>Projects</span>
            </div>
            <div className='statItem'>
              <span className='statNum'>100<span>%</span></span>
              <span className='statLabel'>Commitment</span>
            </div>
          </div>

         
          <div className='aboutBtns'>
            <a
              href='#projects'
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <button className='abt1'>View Projects</button>
            </a>
            <a
              href='#contacts'
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <button className='abt2'>
                Get in touch <FaArrowRightLong size={16} />
              </button>
            </a>
          </div>
        </div>

  
        <div className='aboutImg'>
          <img src='/media/profile.jpeg' alt='Pascaline Mahoro — Full Stack Developer' />
        </div>
      </div>
    </div>
  );
}
