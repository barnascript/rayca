import styles from "./Dashboard.module.scss";
import blue_line from "../assets/images/blue_line.png";
import red_line from "../assets/images/red_line.png";
import { useState } from "react";
import Graph from "../graph/Graph";
import { useDropdownContext } from "../Context";

const Dashboard = ({ onDropContainer, onDragOver, onHandleClick }) => {
  const [showDropDown, setShowDropdown] = useState(false);
  const { linkActive, setLinkActive } = useDropdownContext();

  const toggleDropDown = () => {
    setShowDropdown(!showDropDown);
    setLinkActive(!linkActive);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.navbar}>
            <div className={styles.left}></div>
            <div className={styles.right}>
              <div className={styles.first_link}></div>
              <div className={styles.second_link}></div>
              <div
                className={styles.third_link}
                onClick={() => setShowDropdown(!showDropDown)}
              ></div>
              {showDropDown && (
                <div className={styles.dropdown}>
                  <div
                    className={styles.drop_link_div}
                    onClick={() => setShowDropdown(!showDropDown)}
                  >
                    <div className={styles.drop_link}></div>
                  </div>
                  <div
                    className={styles.drop_link_div}
                    onClick={() => setShowDropdown(!showDropDown)}
                  >
                    <div className={styles.drop_link}></div>
                  </div>
                  <div
                    className={styles.drop_link_div}
                    onClick={() => setShowDropdown(!showDropDown)}
                  >
                    <div className={styles.drop_link}></div>
                  </div>
                  <div
                    className={styles.drop_link_div}
                    onClick={toggleDropDown}
                  >
                    <div className={styles.drop_link}></div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <Graph img1={blue_line} img2={red_line} className={styles.graph} />
        </div>
        <div className={styles.monitor}>
          <div className={styles.round_circle}></div>
          <div className={styles.button}></div>
        </div>
      </div>
      <div className={styles.views}>
        <div className={styles.view_one}></div>
        <div
          className={styles.view_two}
          onDrop={onDropContainer}
          onDragOver={onDragOver}
        ></div>
      </div>
    </>
  );
};

export default Dashboard;
