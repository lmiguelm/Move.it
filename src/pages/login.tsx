import { useEffect } from 'react';
import Router from 'next/router';
import { signIn, useSession } from 'next-auth/client';

import styles from '../styles/pages/Login.module.css';
import {
  Github,
  Google
} from 'react-bootstrap-icons';


export default function Login() {

  const [session, loading] = useSession();

  useEffect(() => {
    if(!loading && !session) {
      Router.push('/');
    }
  }, [loading]);

  return (
    <div className={styles.container}>
      <main>
        <img src="/logo-full-white.svg" alt="Logo"/>

        <h1>Bem-vindo</h1>

        <div>
          <p> 
            Esse site tem objetivo de fazer pessoas que<br/> passam 
            horas e horas em frente ao computador<br/> praticarem 
            exercícios em forma de desafios.
          </p>
        </div>

        <button type="button" onClick={() => signIn('github', {  callbackUrl: '/', })}>
          <Github size={24} style={{ marginRight: '0.8rem' }}/>
          Entrar com GitHub
        </button>

        <button type="button" onClick={() => signIn('google', { callbackUrl: '/', })}>
          <Google   size={24} style={{ marginRight: '0.8rem' }}/>
          Entrar com Google
        </button>
      </main>
    </div>
  )
}