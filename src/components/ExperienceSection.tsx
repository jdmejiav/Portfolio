import styles from '../App.module.css';
import { experience } from '../data/portfolio';
import { Section } from './Section';

export default function ExperienceSection() {
  return (
    <Section
      eyebrow="Experience"
      id="experience"
      title="Progressive engineering roles across cloud, product, and operations systems."
    >
      <div className={styles.timeline}>
        {experience.map((item) => (
          <article className={styles.timelineItem} key={`${item.company}-${item.dates}`}>
            <div>
              <p className={styles.period}>{item.dates}</p>
              <p className={styles.location}>{item.location}</p>
            </div>
            <div className={styles.timelineBody}>
              <h3>
                {item.role} ·{' '}
                {item.companyUrl ? (
                  <a href={item.companyUrl} rel="noreferrer" target="_blank">
                    {item.company}
                  </a>
                ) : (
                  item.company
                )}
              </h3>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
