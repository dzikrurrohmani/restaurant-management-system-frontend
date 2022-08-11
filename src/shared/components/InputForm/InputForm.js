import React from 'react';

const InputForm = (props) => {
  const { label, name, onChange, value } = props;
  return (
    <>
      <label>{label}</label>
      <input name={name} value={value} onChange={onChange} />
    </>
  );
};

export default InputForm;
