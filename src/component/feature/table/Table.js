import { Component } from 'react';

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTable: '',
      isSubmitting: false,
    };
  }

  onChange = (event) => {
    this.setState({
      newTable: event.target.value,
    });
  };

  render() {
    return this.props.render({
      newTable: this.state.newTable,
      onChange: this.onChange
    });
  }
}
