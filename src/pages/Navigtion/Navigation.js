import './Navigation.css';
import { useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { id: 1, label: 'About',    href: 'about' },
  { id: 2, label: 'Skills',   href: 'skills' },
  { id: 3, label: 'Projects', href: 'projects' },
];

export default function Navigation() {
  const navigate  = useNavigate();
  const location  = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  };

  return (
    <nav className='navMain' aria-label="Main navigation">
   
      <a
        className='navLogo'
        href='/'
        onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
        aria-label="Go to top"
      >
        <span className='logo-dot' aria-hidden='true' />
        PM
      </a>

    
      <div className='navLinks'>
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.href}`}
            onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
          >
            {link.label}
          </a>
        ))}
      </div>

    
      <a
        href='#contacts'
        className='navCta'
        onClick={(e) => { e.preventDefault(); scrollToSection('contacts'); }}
      >
        Get in touch
      </a>
    </nav>
  );
}
