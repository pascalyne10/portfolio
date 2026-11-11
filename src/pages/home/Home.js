import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import About from '../about/About';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';
import Contacts from '../conctacts/Contacts';

export default function Home() {
  const location = useLocation();
  const navigate  = useNavigate();

  useEffect(() => {
    const section = location.state?.scrollTo;
    if (section) {
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
        navigate('.', { replace: true, state: null });
      }, 100);
    }
  }, [location, navigate]);

  return (
    <div className='page-wrapper'>
      <section id='about'><About /></section>
      <section id='skills'><Skills /></section>
      <section id='projects'><Projects /></section>
      <section id='contacts'><Contacts /></section>
    </div>
  );
}
