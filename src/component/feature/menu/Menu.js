import { Component } from 'react';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newMenu: '',
      isSubmitting: false,
    };
  }

  onChange = (event) => {
    this.setState({
      newMenu: event.target.value,
    });
  };

  render() {
    return this.props.render({
      stateKey: this.props.stateKey,
      menuList: this.props.menuList,
      handleSubmit: this.props.handleSubmit,
      newMenu: this.state.newMenu,
      onChange: this.onChange,
    });
  }
}
