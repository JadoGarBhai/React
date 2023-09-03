import React from "react";
import styles from "./LandingPage.module.css";
import Tasbeeh from "../Button/Tasbeeh";

function LandingPage() {
  return (
    <div>
      <div className="col-xl-4 col-sm-12">
        <h1>Tasbeeh Counter</h1>
      </div>

      <div className={`${styles.mainBody} col-xl-4 col-sm-12 pb-3`}>
        <h2 className="col-12">Popular Tasbeeh</h2>
        <div className="container">
          <div className={styles.tesbeh}>
            <Tasbeeh name={"Allah o Akbar"} />
            <Tasbeeh name={"SubhanAllah"} />
            <Tasbeeh name={"Astagfirullah"} />
            <Tasbeeh name={"Alhamdulillah"} />
          </div>

          <div className="btn btn-danger mt-3 col-12">+ CREATE NEW TASBEEH</div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
