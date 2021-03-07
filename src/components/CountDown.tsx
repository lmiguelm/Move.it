import styles from '../styles/components/CountDown.module.css';

import { useCountDownContext } from '../contexts/CountDownContext';

import {
  CaretRightFill,
  CheckCircleFill,
  X
} from 'react-bootstrap-icons';

export function CountDown() {

  const { 
    minutes, 
    seconds, 
    hasFinished, 
    isActive, 
    resetCountDown, 
    startCountDown
  } = useCountDownContext();
  
  const [ minuteLeft, minuteRight ] = String(minutes).padStart(2, '0').split('');
  const [ secondLeft, secondRight ] = String(seconds).padStart(2, '0').split('');

  return (
   <> 
      <div className={styles.countDownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>

        <span>:</span>

        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      { hasFinished ? (
         <button 
          disabled
          className={styles.countDownButton}
        >
          Ciclo encerrado
          <CheckCircleFill color="var(--green)" style={{ marginLeft: '1rem' }} />
       </button>
      ) : (
        <>
          { isActive ? (
            <button 
              onClick={resetCountDown}
              type="button" 
              className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
            >
              Abandonar ciclo
              <X style={{ marginLeft: '1rem' }} color="var(--title)"/>
            </button>
          )  : (
            <button 
              onClick={startCountDown}
              type="button" 
              className={styles.countDownButton}
            >
              Iniciar uim ciclo
              <CaretRightFill style={{ marginLeft: '1rem' }} color="var(--white)"/>
            </button>
          )}
        </>
      )}
 
      
   </>
  )
}