import styles from './Header.module.css'

export function Header({children}) {
    
  return (
    <header className={styles.header} >      
        <h1 className={styles.fonte}>{children}</h1>     
    </header>
  );
}
