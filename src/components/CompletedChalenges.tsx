import styles from '../styles/components/CompletedChalanges.module.css';

import { useChallengeContext } from '../contexts/ChallengesContext';

export function CompletedChalenges() {

  const { challengesCompleted } = useChallengeContext();

  return (
    <div className={styles.completedChalangesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}