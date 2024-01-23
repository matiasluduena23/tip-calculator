export default function Button({ value, handleClick }) {
  return (
    <div>
      <button value={value} type="submit" onClick={handleClick}>
        {value}%
      </button>
    </div>
  );
}
