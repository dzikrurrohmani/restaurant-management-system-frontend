import { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unameInput: '',
      paswdInput: '',
      unameValid: true,
      paswdValid: true,
      buttonOn: false,
    };
  }

  logChange = (key, value) => {
    if (!this.state.buttonOn) {
      this.setState({
        buttonOn: true,
      });
    }
    this.setState({
      [key]: value,
    });
    key === 'unameInput' ? this.unameValidate() : this.paswdValidate();
  };

  unameValidate = () => {
    if (
        this.state.unameInput.match(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/)
      )
    {
      this.setState({
        unameValid: true,
      });
    } else {
      this.setState({
        unameValid: false,
      });
    }
  };

  paswdValidate = () => {
    if (this.state.paswdInput.length > 6) {
      this.setState({
        paswdValid: true,
      });
    } else {
      this.setState({
        paswdValid: false,
      });
    }
  };

  logSubmit = (event) => {
    event.preventDefault();
    if (
      this.state.unameInput === 'admin@example.com' &&
      this.state.paswdInput === '12345678'
    ) {
      alert(`Selamat datang ${this.state.unameInput}, login berhasil`);
      this.props.handleLog(true);
    } else {
      alert('Email atau password yang anda masukkan salah');
    }
  };

  render() {
    return this.props.render({
      unameValid: this.state.unameValid,
      paswdValid: this.state.paswdValid,
      buttonOn: this.state.buttonOn,
      logChange: this.logChange,
      logSubmit: this.logSubmit,
    });
  }
}
