export default function Field({
  type,
  placeholder,
  name,
  label,
  reg,
  validation,
  error,
  options = [],
}) {
  const isCheckbox = type === "checkbox";
  const controlClass = isCheckbox
    ? "form-check-input"
    : type === "select"
      ? "form-select"
      : "form-control";

  const controlProps = {
    id: name,
    "aria-invalid": Boolean(error),
    "aria-describedby": error ? `${name}-error` : undefined,
    ...reg(name, validation),
  };

  return (
    <div className={`signup-field${isCheckbox ? " signup-field--checkbox" : ""}`}>
      {isCheckbox ? (
        <div className="form-check">
          <input type="checkbox" className={controlClass} {...controlProps} />
          <label className="form-check-label" htmlFor={name}>
            {label}
          </label>
        </div>
      ) : (
        <>
          <label className="form-label" htmlFor={name}>
            {label}
          </label>
          {type === "select" ? (
            <select className={controlClass} {...controlProps}>
              <option value="">{placeholder}</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={type}
              className={controlClass}
              placeholder={placeholder}
              {...controlProps}
            />
          )}
        </>
      )}
      {error && (
        <div className="signup-field__error" id={`${name}-error`} role="alert">
          {error.message}
        </div>
      )}
    </div>
  );
}
