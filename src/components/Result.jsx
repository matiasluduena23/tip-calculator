import styles from "../style/result.module.css";
export default function Result({ totalTip, personTip }) {
  return (
    <section className={styles.section}>
      <div className={styles.wrapSection}>
        <div className={styles.flex}>
          <div className={styles.wrapContent}>
            <p>Tip Amount</p>
            <p>/ person</p>
          </div>
          <p className={styles.price}>${totalTip ? totalTip : 0}</p>
        </div>
        <div className={styles.flex}>
          <div className={styles.wrapContent}>
            <p>Tip Amount</p>
            <p>/ person</p>
          </div>
          <p className={styles.price}>${personTip ? personTip : 0}</p>
        </div>
      </div>

      <button className={styles.button}>reset</button>
    </section>
  );
}
