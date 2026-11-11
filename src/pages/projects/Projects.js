import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Photo Studio Platform',
    description:
      'A full-featured event and photo studio booking platform with real-time availability, gallery showcase, and client management.',
    tags: ['React', 'Firebase', 'Node.js'],
    link: 'https://kazi-events-802b6.web.app/',
  },
  {
    id: 2,
    title: 'E-Commerce Web App',
    description:
      'A responsive online store with product listings, cart management, and seamless checkout flow.',
    tags: ['React', 'MongoDB', 'Express'],
    link: 'https://kazi-events-802b6.web.app/',
  },
  {
    id: 3,
    title: 'Project Dashboard',
    description:
      'An internal project management dashboard for tracking milestones, assigning tasks, and monitoring team progress.',
    tags: ['React', 'Node.js', 'REST API'],
    link: 'https://kazi-events-802b6.web.app/',
  },
];

export default function Projects() {
  return (
    <div className='projectsMain'>
      <div className='projectsHeader'>
        <span className='section-label'>My Work</span>
        <h2 className='section-title'>Featured Projects</h2>
        <p className='section-subtitle'>
          A selection of projects built with care — from design to deployment.
        </p>
      </div>

      <div className='projectContent'>
        {projects.map((project) => (
          <div className='projectCard' key={project.id}>
            <span className='projectCardNum'>
              {String(project.id).padStart(2, '0')}
            </span>
            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <div className='projectTags'>
              {project.tags.map((tag) => (
                <span className='projectTag' key={tag}>{tag}</span>
              ))}
            </div>

            <a href={project.link} target='_blank' rel='noreferrer'>
              View project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
