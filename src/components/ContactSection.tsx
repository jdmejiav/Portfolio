import styles from '../App.module.css';
import { contactLinks, profile } from '../data/portfolio';
import { Section } from './Section';
import { useAnalytics } from '../hooks/useAnalytics';

export function ContactSection() {
  const { trackEvent } = useAnalytics();

  return (
    <Section
      eyebrow="Contact"
      id="contact"
      title="Easy next steps for recruiters and hiring teams."
      intro="Use the CV download for screening, or reach out directly for interviews and role-fit conversations."
    >
      <div className={styles.contactPanel}>
        <div>
          <h3>{profile.title}</h3>
          <p>{profile.location}</p>
        </div>
        <div className={styles.contactActions}>
          <a
            className={styles.primaryButton}
            href={`mailto:${profile.email}`}
            onClick={() => trackEvent({ name: 'contact_clicked', properties: { location: 'contact' } })}
          >
            Email Juan
          </a>
          <a className={styles.secondaryButton} href={profile.cvPath}>
            Download CV
          </a>
        </div>
        <div className={styles.quickLinks}>
          {contactLinks.map((link) => (
            <a href={link.href} key={link.href} rel={link.external ? 'noreferrer' : undefined} target={link.external ? '_blank' : undefined}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
