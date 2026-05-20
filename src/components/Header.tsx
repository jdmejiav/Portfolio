import styles from '../App.module.css';
import { navigation, profile } from '../data/portfolio';

type HeaderProps = {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
};

export function Header({ onToggleTheme, theme }: HeaderProps) {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#top" aria-label={`${profile.name} home`}>
        JD
      </a>
      <nav aria-label="Primary navigation">
        {navigation.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <button className={styles.themeToggle} type="button" onClick={onToggleTheme}>
        {theme === 'dark' ? 'Light' : 'Dark'}
      </button>
    </header>
  );
}
