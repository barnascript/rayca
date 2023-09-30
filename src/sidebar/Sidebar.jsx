import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}></div>
      <div className={styles.links}>
        <div className={styles.first_link}>
          <div className={styles.first_active_link}></div>
        </div>
        <div className={styles.link}></div>
        <div className={styles.link}></div>
        <div className={styles.link}></div>
        <div className={styles.link}></div>
        <div className={styles.link}></div>
        <div className={styles.link}></div>
        <div className={styles.link}></div>
      </div>
    </div>
  );
};

export default Sidebar;
