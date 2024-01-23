export default function Input({ register, label, errors }) {
  return (
    <div>
      <input
        type="number"
        placeholder="0"
        step="0.01"
        {...register(label, {
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
      {errors[label] && <span>{errors[label].message}</span>}
    </div>
  );
}
