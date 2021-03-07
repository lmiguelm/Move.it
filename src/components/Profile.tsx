import styles from '../styles/components/Profile.module.css';

import { useChallengeContext } from '../contexts/ChallengesContext';

import { ArrowUpCircle } from 'react-bootstrap-icons';

import { User } from 'next-auth';

interface IUser extends User {
  id: number;
  totalExperience: number;
  currentExperience: number;
  level: number;
  challengesCompleted: number;
}

interface ProfileProps {
  user: IUser;
}

export function Profile( { user }: ProfileProps) {

  const { level } = useChallengeContext();

  return (
    <div className={styles.profileContainer}>
      <img src={user.image} alt={ user.name ?? `${user.id}` }/>
      <div>
        <strong>{user.name}</strong>
        <p>
          <ArrowUpCircle color="var(--green)" style={{ marginRight: '0.5rem' }} />
          Level: {level}
        </p>
      </div>
    </div>
  )
}