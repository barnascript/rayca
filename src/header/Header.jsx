import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={`sw ${styles.wrapper}`}></div>
    </div>
  );
};

export default Header;
