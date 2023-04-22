import Link from "next/link";
import styles from './Header.module.css';
//import Button from './Button'
export  function Header() {
  return (
    
      <header className={styles.header}>
        <Link href="/" className={styles.button}>
            Index
        </Link> 
        <Link href="/about" className={styles.button}>
            About
        </Link> 
  {/*}
        <Button as={Link} to="/" className={styles.button}>
            Index
        </Button>
        <Button as={Link} to="/about">About</Button>
*/}
      </header>
  )
}
