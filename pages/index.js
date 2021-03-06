import Head from 'next/head';
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import { Toolbar } from '../components/toolbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>YAB Indian Health News</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page-container">
        <Toolbar />

        <div className={styles.main}>
          <h1><span>Welcome to </span>YAB Indian Health News</h1>
          <h2>Keep yourself Safe & Healthy with the Top Indian Health News!!</h2>
        </div>
      </div>
    </div>
  );
}
