import { useContext } from 'react';
import styles from '../style/result.module.css';
import { TipContext } from '../context/TipContext';

export default function Result({ handleReset }) {
    const { personTip, totalTip } = useContext(TipContext);

    return (
        <section className={styles.section}>
            <div className={styles.wrapSection}>
                <div className={styles.flex}>
                    <div className={styles.wrapContent}>
                        <p>Tip Amount</p>
                        <p>/ person</p>
                    </div>
                    <p className={styles.price}>
                        ${personTip ? personTip.toFixed(2) : 0}
                    </p>
                </div>
                <div className={styles.flex}>
                    <div className={styles.wrapContent}>
                        <p>Total</p>
                        <p>/ person</p>
                    </div>
                    <p className={styles.price}>
                        ${totalTip ? totalTip.toFixed(2) : 0}
                    </p>
                </div>
            </div>

            <button className={styles.button} onClick={handleReset}>
                reset
            </button>
        </section>
    );
}
