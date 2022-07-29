import './Login.css';

export default function LoginView(props) {
  const {
    unameValid,
    paswdValid,
    unameValidate,
    paswdValidate,
    logChange,
    logSubmit,
  } = props;
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
              name="username"
              id="username"
              placeholder="enter your email"
              onChange={((event) =>
                logChange('unameInput', event.target.value, (()=>unameValidate)))
              }
            />
            {unameValid ? (
              <h4 style={{ color: 'red' }}>email format isn't valid</h4>
            ) : (
              <h4>&nbsp;</h4>
            )}
          </div>
          <div>
            <label>Password</label>
            <br />
            <input
              className="html_input"
              type="password"
              name="password"
              id="password"
              placeholder="enter your password"
              onChange={((event) =>
                logChange('paswdInput', event.target.value, paswdValidate))
              }
            />
            {paswdValid ? (
              <h4 style={{ color: 'red' }}>
                password must have at least 6 character
              </h4>
            ) : (
              <h4>&nbsp;</h4>
            )}
          </div>
          <button
            className="html_button"
            type="submit"
            onSubmit={logSubmit}
            disabled={unameValid && paswdValid ? false : true}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}
