import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {Footer} from "../components/Footer"
import { Main } from "../components/Main";
import { Header } from "../components/Header";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main page="index"/>

      <Footer/>
      <style jsx >{`
        .code {
         background: #d4c8c8;
         border-radius: 5px;
         padding: 0.75rem;
         font-size: 1.1rem;
         font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
                   DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;  
        }
      `}</style> 
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
