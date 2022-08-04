import { Component } from 'react';

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      status: '',
      isSubmitting: false,
    };
  }

  onChange = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  onSubmitting = (value) => {
    this.setState({
      isSubmitting: value,
    });
  };

  onSubmit = () => {
    console.log(1);
    let newTable = {
      id: this.state.id,
      status: this.state.status === 'true' ? true : false,
    };
    this.props.handleSubmit(this.props.stateKey, [
      ...this.props.tableList,
      newTable,
    ]);
    this.setState({
      isSubmitting: false,
      id: this.state.id,
      status: this.state.status,
    });
  };

  render() {
    return this.props.render({
      id: this.state.id,
      status: this.state.status,
      tableList: this.props.tableList,
      handleDelete: this.props.handleDelete,
      isSubmitting: this.state.isSubmitting,
      onSubmitting: this.onSubmitting,
      onSubmit: this.onSubmit,
      onChange: this.onChange,
    });
  }
}