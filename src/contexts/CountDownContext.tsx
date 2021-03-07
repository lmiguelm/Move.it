import { createContext, useContext, useEffect, useState } from "react";
import { useChallengeContext } from "./ChallengesContext";

interface CountDownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountDown(): void;
  resetCountDown(): void;
}

interface CountDownProviderProps {
  children: React.ReactNode;
}

const CountDownContext = createContext({} as CountDownContextData);

const START_TIME = 20 * 60;
let countDownTimeout: NodeJS.Timeout;

export function CountDownProvider({ children }: CountDownProviderProps) {

  const { startNewChallenge } = useChallengeContext();


  const [time, setTime] = useState(START_TIME);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFineshed] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountDown() { 
    setIsActive(true);
  }

  function resetCountDown() {
    clearTimeout(countDownTimeout);
    setIsActive(false);
    setTime(START_TIME);   
    setHasFineshed(false);
  }

  useEffect(() => {
    if(isActive && time > 0) {
      countDownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if(isActive && time <= 0) {
      setHasFineshed(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);


  return (
    <CountDownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountDown,
        resetCountDown
      }}
    >
      {children}
    </CountDownContext.Provider>
  )
}

export function useCountDownContext() {
  return useContext(CountDownContext);
}