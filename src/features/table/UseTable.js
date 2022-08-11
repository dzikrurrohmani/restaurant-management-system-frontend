import { Component, useState, useRef, useEffect } from 'react';
import { table } from '../../model/table';
import { useDeps } from '../../shared/api/DepsContext';
import { WithLoading } from '../../shared/WithLoading';

const UseTable = (props) => {
  // const [id, setId] = useState('');
  // const [number, setNumber] = useState('');
  // const [status, setStatus] = useState('choose');

  const { tableService } = useDeps();
  const [newTable, setNewTable] = useState({ tableDescription: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tables, setTables] = useState([]);

  useEffect(() => {
    getAllTable();
  }, []);

  const onChange = (event) => {
    setNewTable({
      ...newTable,
      [event.target.name]: event.target.value,
    });
  };

  const getAllTable = async () => {
    console.log('UseTablegetall1');
    props.onLoading(true);
    try {
      const response = await tableService.getAllTable();
      console.log('UseTablegetall2');
      setTables(response.data);
      props.onLoading(false);
    } catch (e) {
      console.log('UseTablegetall3', e.message);
      props.onLoading(false);
      alert('Something went wrong..');
    }
  };

  const onSubmit = async () => {
    try {
      this.props.onLoading(true);
      const { id, number, status } = this.state;
      await this.service.addTable(table(id, number, status[0].toUpperCase()));
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

  const onDelete = async (id) => {
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

  const   onSubmitting = (value) => {
    this.setState({
      isSubmitting: value,
      id: '',
      number: '',
      status: 'choose',
    });
  };

  return props.render({
    tableList: tables,
    handleDelete: onDelete,
    isSubmitting: isSubmitting,
    onSubmitting: onSubmitting,
    onSubmit: onSubmit,
    onChange: onChange,
  });
};
export default WithLoading(UseTable);
