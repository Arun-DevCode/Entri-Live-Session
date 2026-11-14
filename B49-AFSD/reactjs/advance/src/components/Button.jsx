export default function Button({
  action,
  type = "button",
  name,
  styles = "",
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={action}
      className={`signup-button ${styles}`.trim()}
      disabled={disabled}
    >
      <span>{name}</span>
      <span className="signup-button__arrow" aria-hidden="true">
        &rarr;
      </span>
    </button>
  );
}
