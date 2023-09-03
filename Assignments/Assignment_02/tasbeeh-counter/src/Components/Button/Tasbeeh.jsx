import styles from "./Tasbeeh.module.css";

const Tasbeeh = (data) => {
  return (
    <div
      className={`${styles.btn} btn btn-danger d-flex justify-content-between align-items-center mb-2`}
    >
      <div>{data.name}</div>
      <p>Popular</p>
    </div>
  );
};

export default Tasbeeh;
