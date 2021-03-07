import styles from '../styles/components/ExperienceBar.module.css';

import { useChallengeContext } from '../contexts/ChallengesContext';

export function ExperienceBar() {

  const { currentExperience, experienceToNextLevel } = useChallengeContext();

  const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel);

  return (
    <header className={styles.experienceBar}>
      <span>0</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel}</span>
    </header>
  );
}