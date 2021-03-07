import Link from 'next/link';

import styles from '../styles/components/Sidebar.module.css';

import { 
  House,
  Trophy,
  BoxArrowInLeft
} from 'react-bootstrap-icons';

interface SidebarProps {
  active: 'home' | 'leaderboard'
}

import { signOut, session } from 'next-auth/client';

export function Sidebar({ active }: SidebarProps) {

  return (
    <div className={styles.container}>
      <header>
        <Link href="/">
          <a>
            <img src="/logo.svg" alt="Logo" />
          </a>
        </Link>
      </header>

      <main>
        <Link href="/">
          <button 
            type="button"
            style={ active == 'home' ? { borderLeft: '2px solid var(--blue)' } : {} }
          >
            <House color={ active == 'home' ? 'var(--blue)' : 'var(--gray-line)' } size={30}/>
          </button>
        </Link>
      
        <Link href="/leaderboard">
          <button 
            type="button"
            style={ active == 'leaderboard' ? { borderLeft: '2px solid var(--blue)' } : {} }
          >
            <Trophy color={ active == 'leaderboard' ? 'var(--blue)' : 'var(--gray-line)' } size={30}/>
          </button>
        </Link>
      </main>

      <footer>
        <Link href="/login">
          <button type="button" onClick={() => signOut({ callbackUrl: '/login' })}>
            <BoxArrowInLeft size={30} color="var(--gray-line)"/>
          </button>
        </Link>
      </footer>
    </div>
  )
}