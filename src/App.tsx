import { Suspense, lazy } from 'react';
import styles from './App.module.css';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { EducationSection } from './components/EducationSection';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SkillsSection } from './components/SkillsSection';
import { useTheme } from './hooks/useTheme';

const ExperienceSection = lazy(() => import('./components/ExperienceSection'));
const ProjectsSection = lazy(() => import('./components/ProjectsSection'));

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.app}>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <AboutSection />
        <Suspense fallback={<div className={styles.loading}>Loading experience...</div>}>
          <ExperienceSection />
        </Suspense>
        <Suspense fallback={<div className={styles.loading}>Loading projects...</div>}>
          <ProjectsSection />
        </Suspense>
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <footer className={styles.footer}>
        <span>Juan Diego Mejia Vargas</span>
        <a href="#top">Back to top</a>
      </footer>
    </div>
  );
}
