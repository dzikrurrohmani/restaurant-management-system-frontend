import './InputForm.css';

export default function InputForm(props) {
  const warnCheck = props.type === "number" ? Number(props.value)  > 0 : props.value
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <label style={{ textAlign: 'left' }}>{props.label+ ' :'}</label>
      <input
        className="input"
        type={props.type ? props.type : 'text'}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
      {warnCheck ? (
        <h4 style={{ color: 'green', fontSize: '22px' }}>✓</h4>
      ) : (
        <p style={{ color: 'red', fontSize: '12px' }}>
          this field is required
        </p>
      )}
    </div>
  );
}
