import styles from '../styles/Home.module.css';
{/* 
const Button = ({ onClick, children }) => {
    return (
      <button onClick={onClick} className={styles.button}>
        {children}
      </button>
    );
 */ } 
  const Button = ({ onClick, children, as: Component = 'button', ...rest }) => {
    return (
      <Component onClick={onClick} className={styles.button} {...rest}>
        {children}
      </Component>
    );
  };
 
  export default Button; 