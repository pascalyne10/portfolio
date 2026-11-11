import './Skills.css';

const skillGroups = [
  {
    id: 1,
    icon: '⚡',
    title: 'Frontend',
    skills: ['TypeScript', 'JavaScript', 'HTML5 & CSS3', 'React.js', 'React Native'],
  },
  {
    id: 2,
    icon: '🛠',
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
  },
  {
    id: 3,
    icon: '📋',
    title: 'Project Management',
    skills: ['Agile / Scrum', 'Waterfall', 'Sprint Planning', 'Team Leadership'],
  },
];

export default function Skills() {
  return (
    <div className='skillsMain'>
      <div className='skillsHeader'>
        <span className='section-label'>What I Do</span>
        <h2 className='section-title'>Skills &amp; Expertise</h2>
        <p className='section-subtitle'>
          A blend of technical depth and project oversight — from first line of
          code to final delivery.
        </p>
      </div>

      <div className='skillsContent'>
        {skillGroups.map((group) => (
          <div className='skillsCard' key={group.id}>
            <div className='skillsCardIcon' aria-hidden='true'>{group.icon}</div>
            <h2>{group.title}</h2>
            <ul>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}