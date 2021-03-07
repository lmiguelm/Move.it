import Link from 'next/link';
import styles from '../styles/components/Settings.module.css';

import {
  Trophy,
  List,
  X,
  ToggleOn,
  ToggleOff,
  House,
  BoxArrowInLeft
} from 'react-bootstrap-icons';

import { useTheme } from '../contexts/ThemeContext';
import { useSettings } from '../contexts/SettingsContext';

import { signOut } from 'next-auth/client';

export function Settings() {

  

  const { changeTheme, isDark } = useTheme();
  const { isSettingsModalOpen, openSettingsModal, closeSettingsModal } = useSettings();

  function handleChangeTheme() {
    changeTheme(!isDark);
  }

  return (
    <>
      <button 
        className={styles.settingButton}
        type="button"
        onClick={openSettingsModal}
      >
        <List size={30} color="var(--white)"/>
      </button>

      { isSettingsModalOpen && (
        <div className={styles.modalContainer}>
          <header>
            <h1>Menu</h1>
            <X size={30} onClick={closeSettingsModal}/>
          </header>

          <main>
            <div>
              <p>Tema Dark </p>

              { isDark ? (
                <ToggleOn size={30} onClick={handleChangeTheme}/>
              ) : (
                <ToggleOff size={30} onClick={handleChangeTheme}/>
              )}
            </div>

            <Link href="/">
                <div onClick={closeSettingsModal}>
                  <House  size={30}/>
                  <span>Home</span>
                </div>
            </Link>

            <Link href="/leaderboard">
                <div onClick={closeSettingsModal}>
                  <Trophy  size={30}/>
                  <span>Ver classficação</span>
                </div>
            </Link>

            <div onClick={() => signOut({ callbackUrl: '/login' })}>
              <BoxArrowInLeft  size={30}/>
              <span>Sair</span>
            </div>
            
          </main>
        </div>
      ) }
    </>
  )
}