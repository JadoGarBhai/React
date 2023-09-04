import styles from "./Tasbeeh.module.css";

const Tasbeeh = (data) => {
  return (
    <div>
      <div
        className={`${styles.btn} btn btn-danger d-flex justify-content-between align-items-center mb-2`}
      >
        <div>{data.name}</div>
        <p>Popular</p>
      </div>

      {/* HIDDEN FEATURES.
      <div className={`${styles.hidden} ${styles.bg}`}>
        <div className="btn btn-warning col-9 mt-5" onClick={reset}>
          RESET
        </div>

        <div className="col-12 mt-5" style={{ color: "#fff" }}>
          <h2>Tasbeeh</h2>
        </div>

        <div className={`${styles.mt} btn btn-danger mt-5 col-4`} onClick={add}>
          <p>{counter}</p>
        </div>
      </div> */}
    </div>
  );
};

export default Tasbeeh;
