import { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unameInput: '',
      paswdInput: '',
      unameValid: false,
      paswdValid: false,
    };
  }

  logChange = (key, value, validate) => {
    console.log(1);
    this.setState({
      [key]: value,
    });
    validate();
  };

  paswdValidate = () => {
    if (
      !/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+.([A-Za-z]{2,4})$/.test(
        this.state.unameInput
      )
    ) {
      this.setState({
        unameValid: true,
      });
    }
  };

  unameValidate = () => {
    if (this.state.paswdInput.length > 6) {
      this.setState({
        paswdValid: true,
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
      unameValidate: this.state.unameValidate,
      paswdValidate: this.state.paswdValidate,
      logChange: this.logChange,
      logSubmit: this.logSubmit,
    });
  }
}
