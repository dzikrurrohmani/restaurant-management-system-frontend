import { Component } from 'react';
import { table } from '../../model/table';
import TableService from '../../services/TableService';
import { WithLoading } from '../../shared/WithLoading';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      number: '',
      status: 'choose',
      isSubmitting: false,
      tables: [],
    };
    this.service = TableService();
  }

  componentDidMount() {
    this.getAllTable();
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmitting = (value) => {
    this.setState({
      isSubmitting: value,
      id: '',
      number: '',
      status: 'choose',
    });
  };

  getAllTable = async () => {
    this.props.onLoading(true);
    try {
      const tables = await this.service.getTable();
      this.setState({
        tables: tables,
      });
      this.props.onLoading(false);
    } catch (e) {
      this.props.onLoading(false);
      alert('Something went wrong..');
    }
  };

  onSubmit = async () => {
    try {
      this.props.onLoading(true);
      const { id, number, status } = this.state;
      await this.service.addTable(
        table(id, number, status[0].toUpperCase())
      );
      this.props.onLoading(false);
      alert(`Successfully add table..`);
      // this.props.onCancelForm();
    } catch (e) {
      this.props.onLoading(false);
      alert('Something went wrong..');
    }
    this.setState({
      isSubmitting: false,
      id: '',
      status: 'choose',
    });
  };

  onDelete = async (id) => {
    const result = window.confirm('Are you sure want to delete ?');
    if (result) {
      this.props.onLoading(true);
      try {
        await this.service.deleteTable(id);
        await this.getAllTable();
        this.props.onLoading(false);
      } catch (e) {
        this.props.onLoading(false);
        alert('Something went wrong..');
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

export default WithLoading(Table);
