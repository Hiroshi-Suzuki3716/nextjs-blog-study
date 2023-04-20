import { Links } from '../components/Links';
import { Headline } from '../components/Headline';
import styles from './Main.module.css';

export function Main(props) {
  return (
    
      <main ClassName={styles.main}>
        <Headline  page={props.page}>
            <span ClassName={styles.code}>pages/{props.page}.js</span>  
        </Headline>

       <Links />
      </main>
  )
} 