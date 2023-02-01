import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.container}>
        <div className={styles.header}>Header</div>

        <div className={styles.interface}>
          <div className={styles.canales}>canales</div>
          <div className={styles.chat}>chat</div>
          <div className={styles.input}>input</div>
          <div className={styles.usuarios}>usuarios</div>
        </div>
      </main>
    </>
  );
}
