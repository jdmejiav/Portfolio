import styles from '../App.module.css';
import { contactLinks, highlights, profile } from '../data/portfolio';
import { useAnalytics } from '../hooks/useAnalytics';

export function Hero() {
  const { trackEvent } = useAnalytics();

  return (
    <section className={styles.hero} id="top" aria-labelledby="hero-title">
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>{profile.location}</p>
        <h1 id="hero-title">{profile.name}</h1>
        <p className={styles.heroTitle}>{profile.title}</p>
        <p className={styles.heroSummary}>{profile.summary}</p>
        <div className={styles.heroActions} aria-label="Primary actions">
          <a
            className={styles.primaryButton}
            href={profile.cvPath}
            onClick={() => trackEvent({ name: 'download_cv_clicked' })}
          >
            Download CV
          </a>
          <a
            className={styles.secondaryButton}
            href={`mailto:${profile.email}`}
            onClick={() => trackEvent({ name: 'contact_clicked', properties: { location: 'hero' } })}
          >
            Contact
          </a>
        </div>
        <div className={styles.quickLinks}>
          {contactLinks.map((link) => (
            <a href={link.href} key={link.label} rel={link.external ? 'noreferrer' : undefined} target={link.external ? '_blank' : undefined}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <aside className={styles.heroPanel} aria-label="Career highlights">
        <div className={styles.availability}>
          <span>Recruiter Snapshot</span>
          <strong>.NET + React + Azure</strong>
        </div>
        <div className={styles.highlightGrid}>
          {highlights.map((highlight) => (
            <div className={styles.highlightCard} key={highlight.label}>
              <strong>{highlight.value}</strong>
              <span>{highlight.label}</span>
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}
