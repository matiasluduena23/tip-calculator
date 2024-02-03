import styles from '../style/input.module.css';
import { useFormContext } from 'react-hook-form';

export default function Input({ label, iconUrl, name }) {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div>
            <p className="lead-label">{label}</p>
            <div className={styles.wrapInput}>
                <input
                    className={`${styles.input} ${
                        errors[name] ? styles.errorInput : undefined
                    }`}
                    type="number"
                    placeholder="0"
                    dir="rtl"
                    step="0.01"
                    {...register(name, {
                        required: {
                            value: true,
                            message: `Can't be zero`,
                        },
                    })}
                />
                <img className={styles.img} src={iconUrl} alt="icon input" />
                {errors[name] && (
                    <span className={styles.errorSpan}>
                        {errors[name].message}
                    </span>
                )}
            </div>
        </div>
    );
}
