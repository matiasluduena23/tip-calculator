export default function Button({ value, handleClick, isClicked }) {
  return (
    <div>
      <button
        className={isClicked === value ? "active" : undefined}
        value={value}
        type="submit"
        onClick={handleClick}
      >
        {value}%
      </button>
    </div>
  );
}
