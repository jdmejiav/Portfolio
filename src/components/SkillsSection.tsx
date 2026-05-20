import styles from '../App.module.css';
import { skillGroups } from '../data/portfolio';
import { Section } from './Section';

export function SkillsSection() {
  return (
    <Section
      eyebrow="Skills"
      id="skills"
      title="A practical stack for cloud-native product delivery."
    >
      <div className={styles.skillGrid}>
        {skillGroups.map((group) => (
          <article className={styles.skillGroup} key={group.label}>
            <h3>{group.label}</h3>
            <ul className={styles.tagList}>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
