import { createContext, useContext, useState } from 'react';
import { Settings } from '../components/Settings';
import { useSession } from 'next-auth/client';

interface SettingsContextData {
  isSettingsModalOpen: boolean;
  openSettingsModal(): void;
  closeSettingsModal(): void;
}

interface SettingsProvider {
  children: React.ReactNode
}

const SettingsContext = createContext({} as SettingsContextData);

export function SettingsProvider({children}: SettingsProvider) {

  const [session] = useSession();

  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  function closeSettingsModal() {
    setIsSettingsModalOpen(false);
  }

  function openSettingsModal() {
    setIsSettingsModalOpen(true);
  }

  return (
    <SettingsContext.Provider
      value={{
        isSettingsModalOpen,
        openSettingsModal,
        closeSettingsModal
      }}
    >
      { children }
      {session && (
        <Settings/>
      )}
    </SettingsContext.Provider>
  )
}

export function useSettings() {
  return useContext(SettingsContext);
}