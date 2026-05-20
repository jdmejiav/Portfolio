import styles from '../App.module.css';
import { profile } from '../data/portfolio';
import { Section } from './Section';

export function AboutSection() {
  return (
    <Section
      eyebrow="About"
      id="about"
      title="Profile"
      intro="Backend depth, front-end delivery, cloud migration practice, and architecture participation across product and enterprise contexts."
    >
      <div className={styles.aboutGrid}>
        <p>{profile.summary}</p>
        <dl className={styles.detailList}>
          <div>
            <dt>Location</dt>
            <dd>{profile.location}</dd>
          </div>
          <div>
            <dt>Timezone</dt>
            <dd>
              {profile.timezone.value}
              <span>{profile.timezone.label}</span>
            </dd>
          </div>
          <div>
            <dt>Languages</dt>
            <dd>
              {profile.languages.map((language) => (
                <span key={language}>{language}</span>
              ))}
            </dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </dd>
          </div>
          <div>
            <dt>Phone</dt>
            <dd>
              <a href={`tel:${profile.phone.replaceAll(' ', '')}`}>{profile.phone}</a>
            </dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}
