import Dashboard from "../dashboard/Dashboard";
import Navbar from "../navbar/Navbar";
import styles from "./Main.module.scss";

const Main = ({ onHandleClick, onDropContainer, onDragOver }) => {
  return (
    <div className={styles.wrapper}>
      <Navbar onHandleClick={onHandleClick} />
      <Dashboard onDropContainer={onDropContainer} onDragOver={onDragOver} />
    </div>
  );
};

export default Main;
