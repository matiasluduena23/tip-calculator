


export default function Input({ register, label, errors, setValue }) {
  return (
    <div>
      <input type="number" placeholder="0" {...register(label, {
        required: {
          value: true,
          message: 'Can´t be Zero'
        },
        pattern: {
          value: /[0-9]/,
          message: 'Only numbers allow'
        }
      })}
        onChange={(e) => setValue(e.target.value)}
      />
      {errors[label] && <span>{errors[label].message}</span>}
    </div>
  )
}
