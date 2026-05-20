import styles from '../App.module.css';
import { projects } from '../data/portfolio';
import { Section } from './Section';

export default function ProjectsSection() {
  return (
    <Section
      eyebrow="Projects"
      id="projects"
      title="Selected Work"
      intro="Professional projects and platform contributions from recent engineering roles."
    >
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <article className={styles.projectCard} key={project.title}>
            <div>
              <p className={styles.projectCompany}>{project.company}</p>
              <h3>{project.title}</h3>
              <p>{project.impact}</p>
            </div>
            <ul className={styles.tagList} aria-label={`${project.title} stack`}>
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className={styles.cardLinks}>
              {project.links.map((link) => (
                <a href={link.href} key={link.href} rel={link.external ? 'noreferrer' : undefined} target={link.external ? '_blank' : undefined}>
                  {link.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
