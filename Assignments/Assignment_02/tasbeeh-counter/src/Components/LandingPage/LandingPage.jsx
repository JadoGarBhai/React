import React, { useState } from "react";
import styles from "./LandingPage.module.css";
import Tasbeeh from "../Button/Tasbeeh";

function LandingPage() {
  const [counter, setCounter] = useState(0);
  const [isHidden, setIsHidden] = useState(true);

  const add = () => {
    setCounter(counter + 1);
  };

  const reset = () => {
    setCounter(0);
  };

  const toggle = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div>
      <div className="col-xl-4 col-sm-12">
        <h1>Tasbeeh Counter</h1>
      </div>

      <div className={`${styles.mainBody} col-xl-4 col-sm-12`}>
        <div className={``}>
          <h2 className="col-12 pt-3">Popular Tasbeeh</h2>
          <div className="container">
            <div className={styles.tesbeh}>
              <Tasbeeh name={"Allah o Akbar"} onClick={toggle} />
              <Tasbeeh name={"SubhanAllah"} />
              <Tasbeeh name={"Astagfirullah"} />
              <Tasbeeh name={"Alhamdulillah"} />
            </div>

            <div className="btn btn-danger mt-3 col-12 mb-3">
              + CREATE NEW TASBEEH
            </div>
          </div>
        </div>

        {/* HIDDEN FEATURES. */}
        <div className={`${styles.hidden} ${styles.bg}`}>
          <div className="btn btn-warning col-9 mt-5" onClick={reset}>
            RESET
          </div>

          <div className="col-12 mt-5" style={{ color: "#fff" }}>
            <h2>Tasbeeh</h2>
          </div>

          <div
            className={`${styles.mt} btn btn-danger mt-5 col-4`}
            onClick={add}
          >
            <p>{counter}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
