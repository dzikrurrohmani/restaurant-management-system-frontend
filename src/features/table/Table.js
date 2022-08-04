import { Component } from 'react';
import { table } from '../../model/table';
import TableService from '../../services/TableService';

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      number: '',
      status: '',
      isSubmitting: false,
      tables: [],
    };
    this.service = TableService();
  }

  componentDidMount() {
    this.getAllTable();
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

  getAllTable = async () => {
    // this.props.handleShowLoading(true);
    try {
      const tables = await this.service.getTable();
      this.setState({
        tables: tables,
      });
      // this.props.handleShowLoading(false);
    } catch (e) {
      // this.props.handleShowLoading(false);
      alert('oops');
    }
  };

  onSubmit = async () => {
    try {
      // this.props.handleShowLoading(true);
      const { id, number, status } = this.state;
      const result = await this.service.addTable(table(id, number, status));
      // this.props.handleShowLoading(false);
      alert(`Successfully add ${result.name}`);
      // this.props.onCancelForm();
    } catch (e) {
      // this.props.handleShowLoading(false);
      alert('Maaf terjadi kesalahan sistem');
    }
    this.setState({
      isSubmitting: false,
      id: this.state.id,
      status: this.state.status,
    });
  };

  onDelete = async (id) => {
    const result = window.confirm('Are you sure want to delete ?');
    if (result) {
      // this.props.handleShowLoading(true);
      try {
        await this.service.deleteTable(id);
        await this.getAllTable();
        // this.props.handleShowLoading(false);
      } catch (e) {
        // this.props.handleShowLoading(false);
        alert('Maaf terjadi kesalahan sistem');
      }
    }
  };

  render() {
    return this.props.render({
      id: this.state.id,
      number: this.state.number,
      status: this.state.status,
      tableList: this.state.tables,
      handleDelete: this.onDelete,
      isSubmitting: this.state.isSubmitting,
      onSubmitting: this.onSubmitting,
      onSubmit: this.onSubmit,
      onChange: this.onChange,
    });
  }
}
