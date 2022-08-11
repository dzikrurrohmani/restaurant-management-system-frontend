export function DropDownList({ label, name, onChange, values, value }) {
  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
      {' '}
      <label>{label + ' :'}</label>
      <select style={{height: '45px', margin: '5px 0', width: '100%'}} name={name} onChange={onChange}>
        {values.map((value, index) => (
          <option key={index} value={value.toLowerCase()}>{value}</option>
        ))}
      </select>
    </div>

    {value !== 'choose' ? (
        <h4 style={{ color: 'green', fontSize: '22px' }}>✓</h4>
      ) : (
        <p style={{ color: 'red', fontSize: '12px' }}>
          this field is required
        </p>
      )}
    </>
  );
}
