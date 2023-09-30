import styles from "./Navbar.module.scss";

const Navbar = ({ onHandleClick }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.search}>
        <div className={styles.search_field}></div>
        <div className={styles.passport}></div>
      </div>
      <div className={styles.name}>
        <h2>
          Welcome Back, <span>Jessica!</span>
        </h2>
        <div className={styles.links}>
          <div className={styles.first_link} onClick={onHandleClick}></div>
          <div className={styles.link}></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
