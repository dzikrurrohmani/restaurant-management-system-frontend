import { USER_NAME_LABEL, USER_PASSWORD_LABEL } from '../../shared/constants';
import './LoginView.css';

export default function LoginView(props) {
  const { userCred, userCredValidity, onChange, onLogin, buttonOn } = props;

  return (
    <>
      <div
        className="html_allContainer"
        style={{ backgroundImage: 'url(/asset/background.jpg)' }}
      >
        <div className="html_textContainer">
          <h1 className="html_h_1_4">WMB</h1>
          <h6 className="html_h_1_4">
            <i>(Warung Makan Bahari)</i>
          </h6>
        </div>
        <div className="html_loginContainer">
          <div>
            <label>User Name</label>
            <br />
            <input
              className="html_input"
              type="text"
              name={USER_NAME_LABEL}
              id="username"
              placeholder="admin@example.com"
              value={userCred[USER_NAME_LABEL]}
              onChange={onChange}
            />
            {userCredValidity[USER_NAME_LABEL] ? (
              <h4 style={{ color: 'bisque', fontSize: '10px' }}>1</h4>
            ) : (
              <p style={{ color: 'red', fontSize: '10px' }}>
                email format isn't valid
              </p>
            )}
          </div>
          <div>
            <label>Password</label>
            <br />
            <input
              className="html_input"
              type="password"
              name={USER_PASSWORD_LABEL}
              id="password"
              placeholder="12345678"
              value={userCred[USER_PASSWORD_LABEL]}
              onChange={onChange}
            />
            {userCredValidity[USER_PASSWORD_LABEL] ? (
              <p style={{ color: 'bisque', fontSize: '10px' }}>1</p>
            ) : (
              <p style={{ color: 'red', fontSize: '10px' }}>
                password must have at least 6 character
              </p>
            )}
          </div>
          <button
            className="html_button"
            type="submit"
            onClick={onLogin}
            disabled={
              userCredValidity[USER_NAME_LABEL] &&
              userCredValidity[USER_PASSWORD_LABEL] &&
              buttonOn
                ? false
                : true
            }
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}
