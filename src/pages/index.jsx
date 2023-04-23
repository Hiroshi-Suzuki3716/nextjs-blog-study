import Head from 'next/head';
import styles from 'src/styles/Home.module.css';
import {Footer} from "src/components/Footer"
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useEffect } from 'react';
export default function Home() {
  useEffect(() => {
    document.body.style.backgroundColor ="lightgreen";
    return () => {
      document.body.style.backgroundColor ="";
}; 
},[]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <button 
      onClick={
        function () {
          alert(123)
        }
      }
      >
        BUtton</button>
      <Main page="index"/>

      <Footer/>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style> 
    </div>
  )
}
