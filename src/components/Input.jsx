import styles from "../style/input.module.css";

export default function Input({ register, label, name, errors, iconUrl }) {
  return (
    <div>
      <p className="lead-label">{label}</p>
      <div className={styles.wrapInput}>
        <input
          className={`${styles.input} ${errors[name] && styles.errorInput} `}
          type="number"
          placeholder="0"
          dir="rtl"
          step="0.01"
          {...register(name, {
            required: {
              value: true,
              message: "Can´t be Zero",
            },
            pattern: {
              value: /[0-9]/,
              message: "Only numbers allow",
            },
          })}
        />
        <img className={styles.img} src={iconUrl} alt="icon input" />
        {errors[name] && (
          <span className={styles.errorSpan}>{errors[name].message}</span>
        )}
      </div>
    </div>
  );
}
