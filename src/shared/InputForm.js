import './InputForm.css';

export default function InputForm(props) {
  return (
    <div style={{marginLeft: '30%', display: 'flex', alignItems: 'center', padding: '30px 0px 25px 0px'}}>
      <label style={{ width: '200px', textAlign: 'left' }}>{props.label}</label>
      <div style={{display: 'flex-column', alignItems: 'start'}}>
        <input
          style={{width: '150%', maxWidth: '300px'}}
          className="input"
          type={props.type ? props.type : 'text'}
          name="name"
          value={props.value}
          placeholder={props.placeholder}
          onChange={(event) => props.onChange(props.id, event.target.value)}
        />
        {props.value ? (
          <h4 style={{ color: 'green', fontSize: '10px' }}>✓</h4>
        ) : (
          <p style={{ color: 'red', fontSize: '10px', paddingLeft:'5px' }}>
            this field is required
          </p>
        )}
      </div>
    </div>
  );
}
