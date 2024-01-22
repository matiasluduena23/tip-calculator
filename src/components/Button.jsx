
export default function Button({ value, handleClick }) {
  return (
    <div>
      <button
        value={value}
        onClick={handleClick}
      >{value}%</button>
    </div>
  )
}
