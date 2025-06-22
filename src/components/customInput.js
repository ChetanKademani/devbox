import React, { useState } from "react";
import style from "../themes/style";

const Input = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder = "",
  required = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div style={style.wrapper}>
      {label && (
        <label htmlFor={name} style={style.label}>
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        style={{
          ...style.input,
          ...(isFocused ? style.inputFocus : {}),
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

export default Input;
