import Lottie from 'react-lottie';

import styles from '../styles/components/Loading.module.css';

interface LoadingProps {
  animationData: any;
  children: React.ReactNode;
}

export function Loading({ children, animationData }: LoadingProps) {
  return (
    <div className={styles.container}>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData
        }}
        height={300}
        width={300}
      />
      {children}
    </div>
  )
}