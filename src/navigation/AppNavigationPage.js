import { Component } from 'react';
export default class AppNavigationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false, // seharusnya false, true untuk keperluan development
    };
  }

  handleLog = (state = false) => {
    this.setState({
      isActive: state,
    });
  };

  render() {
    return this.props.render({
      isActive: this.state.isActive,
      handleLog: this.handleLog,
    });
  }
}
