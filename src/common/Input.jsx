import React from 'react';

const Input = ({ name, label, error,autofocus,...rest}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        name={name}
        autoFocus={autofocus}
        id={name}
        className="form-control" />
      {error && <div className="alert alert-danger mt-2">
        {error}
      </div>}
    </div>
  );
}
Input.defaultProps = {
  autofocus: false
}

export default Input;