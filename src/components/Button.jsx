export default function Button({ value, handleClick, isClicked }) {
  return (
    <div>
      <button
        className={isClicked === value && "active"}
        value={value}
        type="submit"
        onClick={handleClick}
      >
        {value}%
      </button>
    </div>
  );
}
