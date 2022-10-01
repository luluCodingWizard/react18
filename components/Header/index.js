import styles from "./header.module.css";

const Header = ({ title = "Awesome me" }) => {
  return (
    <header className={styles.header}>
      <img src="vercel.svg" alt="logo" className={styles.logo} />
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
