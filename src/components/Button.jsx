export default function Button({ value, handleClick, isActive }) {
  const activeClass = Number(isActive) === value ? "active" : undefined;

  return (
    <div>
      <button
        className={activeClass}
        value={value}
        type="submit"
        onClick={handleClick}
      >
        {value}%
      </button>
    </div>
  );
}
