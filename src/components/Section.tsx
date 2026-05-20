import type { PropsWithChildren } from 'react';
import styles from '../App.module.css';

type SectionProps = PropsWithChildren<{
  eyebrow?: string;
  id: string;
  title: string;
  intro?: string;
}>;

export function Section({ children, eyebrow, id, intro, title }: SectionProps) {
  return (
    <section className={styles.section} id={id}>
      <div className={styles.sectionHeader}>
        {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
        <h2>{title}</h2>
        {intro ? <p>{intro}</p> : null}
      </div>
      {children}
    </section>
  );
}
