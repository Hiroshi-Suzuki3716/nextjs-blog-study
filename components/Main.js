import { Links } from '../components/Links';
import { Headline } from '../components/Headline';
import styles from '../styles/Home.module.css';

export function Main(props) {
  return (
    
      <main ClassName={styles.main}>
        <Headline  page={props.page}>
            <code ClassName={styles.code}>pages/{props.page}.js</code>  
        </Headline>

       <Links />
      </main>
  )
} 