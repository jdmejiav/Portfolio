import styles from '../App.module.css';
import { certifications, education } from '../data/portfolio';
import { Section } from './Section';

export function EducationSection() {
  return (
    <Section
      eyebrow="Education"
      id="education"
      title="Academic Background"
    >
      <div className={styles.credentialsGrid}>
        <article className={styles.credentialCard}>
          <h3>Education</h3>
          {education.map((item) => (
            <p key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.institution} · {item.details}</span>
            </p>
          ))}
        </article>
        {certifications.length > 0 ? (
          <article className={styles.credentialCard}>
            <h3>Certifications</h3>
            {certifications.map((item) => (
              <p key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.issuer} · {item.details}</span>
              </p>
            ))}
          </article>
        ) : null}
      </div>
    </Section>
  );
}
