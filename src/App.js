import Sidebar from "./sidebar/Sidebar";
import styles from "./App.module.scss";
import Main from "./main/Main";
import { useState } from "react";

function App() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [dragging, seDragging] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  const handleDragStart = (event) => {
    seDragging(true);
    event.dataTransfer.setData("text/plain", event.target.id);
    setShowOverlay(!showOverlay);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    console.log("Dropped:", data);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDragEnd = () => {
    seDragging(false);
  };
  return (
    <div className={`sw ${styles.wrapper}`}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.main}>
        <Main
          onHandleClick={toggleOverlay}
          onDropContainer={handleDrop}
          onDragOver={handleDragOver}
        />
      </div>
      <div
        className={
          !showOverlay ? styles.overlay_div : styles.overlay_div_active
        }
      ></div>

      <div className={!showOverlay ? styles.overlay : styles.overlay_active}>
        <div className={styles.steps}>
          <div className={styles.first_step}></div>
          <div className={styles.second_step}></div>
        </div>
        <div className={styles.boxes}>
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div
              key={`box-${index}`} // Use a unique key for each element
              id={`box-${index}`} // Assign a unique ID
              className={styles.box}
              draggable={!dragging}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            ></div>
          ))}
        </div>

        <div className={styles.exit} onClick={toggleOverlay}></div>
      </div>
    </div>
  );
}

export default App;
