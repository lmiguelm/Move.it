import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { getSession } from 'next-auth/client';
import { User } from 'next-auth';

import { CountDown } from "../components/CountDown";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChanllengeBox";
import { ExperienceBar } from "../components/ExperienceBar";
import { CompletedChalenges } from "../components/CompletedChalenges";
import { Sidebar } from '../components/Sidebar';

import { CountDownProvider } from '../contexts/CountDownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

import styles from '../styles/pages/Home.module.css';

interface IUser extends User {
  id: number;
  totalExperience: number;
  currentExperience: number;
  level: number;
  challengesCompleted: number;
}

interface HomeProps {
  user: IUser;
}

export default function Home(props: HomeProps) {
  return (  
    <ChallengesProvider
      user={props.user}
    > 
      <div className={styles.container}>
        <Sidebar active="home"/>
  
        <Head>
          <title>Início | move.it</title>
        </Head>

        <div className={styles.content}>
          <ExperienceBar/>

          <CountDownProvider>
            <section>
              <div>   
                <Profile user={props.user} />
                <CompletedChalenges/>
                <CountDown/>
              </div>

              <div>
                <ChallengeBox/>
              </div>
            </section>
          </CountDownProvider>
        </div>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const response = await getSession({ req: ctx.req });

  if(!response) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: {
      user: response.user
    }
  }
}