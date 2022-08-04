export function DropDownList({ label, name, onChange, values }) {
  return (
    <>
      {' '}
      <label>{label}</label>
      <select className="menu-form-input" name={name} onChange={onChange}>
        {values.map((value, index) => (
          <option key={index} value={value.toLowerCase()}>{value}</option>
        ))}
      </select>
    </>
  );
}
