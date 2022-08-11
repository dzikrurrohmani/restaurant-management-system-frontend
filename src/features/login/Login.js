import { Component } from 'react';
import { EMAIL_REGEX } from '../../shared/constants';
import { WithLoading } from '../../shared/WithLoading';

class Login extends Component {
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

  logChange = (event) => {
    if (!this.state.buttonOn) {
      this.setState({
        buttonOn: true,
      });
    }
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      this.validate(event.target.name, event.target.value)
    );
  };

  validate = (key, value) => {
    if (key === 'unameInput') {
      if (value.match(EMAIL_REGEX)) {
        this.setState({
          unameValid: true,
        });
      } else if (!this.state.unameInput.match(EMAIL_REGEX)) {
        this.setState({
          unameValid: false,
        });
      }
    } else {
      if (value.length > 6) {
        this.setState({
          paswdValid: true,
        });
      } else {
        this.setState({
          paswdValid: false,
        });
      }
    }
  };

  logSubmit = async (event) => {
    event.preventDefault();
    if (
      this.state.unameInput === 'admin@example.com' &&
      this.state.paswdInput === '12345678'
    ) {
      this.props.onLoading(true)
      await (() => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 2000);
        });
      })();
      this.props.onLoading(false);
      alert(`Selamat datang ${this.state.unameInput}, login berhasil`);
      this.props.handleLog(true);
    } else {
      alert('Email atau password yang anda masukkan salah');
    }
  };

  render() {
    console.log('login');
    return this.props.render({
      unameValid: this.state.unameValid,
      paswdValid: this.state.paswdValid,
      buttonOn: this.state.buttonOn,
      logChange: this.logChange,
      logSubmit: this.logSubmit,
      unameInput: this.state.unameInput,
      paswdInput: this.state.paswdInput,
    });
  }
}

export default WithLoading(Login);
