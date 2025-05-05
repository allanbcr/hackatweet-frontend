import styles from "../styles/Trends.module.css";
import { useSelector } from "react-redux";

function Trends(props) {
  const hastags = useSelector((state) => state.hastags.value);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Trends</h2>

      <div className={styles.trendsContainer}>
        <div className={styles.trends}>
          <div className={styles.trendsTitle}>{props.hastag}</div>
          <div className={styles.trendsNumber}>{hastags.length} tweet</div>
        </div>
      </div>
    </div>
  );
}

export default Trends;
