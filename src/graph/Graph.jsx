import styles from "./Graph.module.scss";
import blue_line from "../assets/images/blue_line.png";
import red_line from "../assets/images/red_line.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import { useDropdownContext } from "../Context";

const Graph = () => {
  const { linkActive } = useDropdownContext();

  return (
    <div className={styles.wrapper}>
      <div className={styles.graph}>
        <div className={styles.images}>
          <img
            src={!linkActive ? image3 : blue_line}
            alt="line-graph"
            className={styles.image1}
          />
          <img
            src={!linkActive ? image4 : red_line}
            alt="line-graph"
            className={styles.image2}
          />
        </div>
      </div>
      <div className={styles.blocks}>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
      </div>
    </div>
  );
};

export default Graph;
