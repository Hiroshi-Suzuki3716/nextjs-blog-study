import Head from 'next/head';
import styles from 'src/styles/Home.module.css';
import {Footer} from "src/components/Footer"
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCallback, useEffect, useState } from 'react';
export default function Home() {

  const [count,setCount] = useState (1);
  const [text,setText] = useState ("");
  const [isShow,setIsShow] = useState (false);
  const [array,setArray] = useState ([]);

  const handleClick = useCallback(() => {
     setCount((precount) => precount + 1);
  },[count]);

  const handleDisplay = useCallback(() => {
     setIsShow((isShow) => !isShow);
  },[]);

  const handleAdd= useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some(item => item === text)){
        alert("同じ要素がすでに存在します。")
        return　prevArray;
      }
     　const newArray = [...prevArray,text]
     return newArray;
    });
  },[text]);

  useEffect(() => {
    document.body.style.backgroundColor ="lightgreen";
    return () => {
      document.body.style.backgroundColor ="";
}; 
},[])
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>Count</button>
      <button onClick={handleDisplay}
      >{isShow ? "非表示" :"表示" }</button>

      <input type='text' value={text} onChange={ e => {
        setText(e.target.value);
      }} />
      <button onClick={handleAdd}>Add</button>
　　　<ul>
        {
          array.map((item) => {
            return (
              <li key={item}>{item}</li>
            )
          })}
      </ul>
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
