import { useState, useEffect } from 'react';
import { useDeps } from '../../shared/api/DepsContext';
import { WithLoading } from '../../shared/WithLoading';

const UseTable = (props) => {
  const { tableService } = useDeps();
  const [newTable, setNewTable] = useState({
    tableId: '',
    tableDescription: '',
    tableAvailability: 'choose',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tables, setTables] = useState([]);

  useEffect(() => {
    onGetAllTable();
  }, [isSubmitting]);

  const onChange = (event) => {
    setNewTable({
      ...newTable,
      [event.target.name]:
        event.target.type === 'number'
          ? Number(event.target.value)
          : event.target.value,
    });
  };

  const onGetAllTable = async () => {
    props.onLoading(true);
    try {
      console.log('masuk getall');
      const response = await tableService.getAllTable();
      setTables(response.data);
      props.onLoading(false);
    } catch (error) {
      props.onLoading(false);
      window.alert(error.message);
    }
  };

  const onCreateTable = async () => {
    if (
      Number(newTable.tableId) &&
      newTable.tableDescription &&
      newTable.tableAvailability !== 'choose'
    ) {
      if (!tables.map((table) => table.tableId).includes(newTable.tableId)) {
        props.onLoading(true);
        try {
          const payload = {
            ...newTable,
            tableAvailability:
              newTable.tableAvailability === 'available' ? true : false,
          };
          const response = await tableService.createTable(payload);
          props.onLoading(false);
          alert(`Successfully add table with id ${response.data.tableId}`);
          setIsSubmitting(false);
        } catch (error) {
          props.onLoading(false);
          window.alert(error.message);
        }
      } else {
        window.alert(`table with id ${newTable.tableId} is already exist`);
      }
    } else {
      window.alert('please fill all required fielda');
    }
  };

  const onDeleteTable = async (id) => {
    const result = window.confirm(
      `Are you sure want to delete table with id ${id}?`
    );
    if (result) {
      props.onLoading(true);
      try {
        const response = await tableService.deleteTableById({
          tableId: Number(id),
        });
        await onGetAllTable();
        props.onLoading(false);
        alert(`Successfully delete table with id ${response.data.tableId}`);
      } catch (error) {
        props.onLoading(false);
        window.alert(error.message);
      }
    }
  };

  const onSubmitting = (value) => {
    setNewTable({
      tableId: '',
      tableDescription: '',
      tableAvailability: 'choose',
    });
    setIsSubmitting(value);
  };

  return props.render({
    newTable,
    tables,
    isSubmitting,
    onSubmitting,
    onDeleteTable,
    onCreateTable,
    onChange,
  });
};
export default WithLoading(UseTable);

// const onSubmit = async () => {
//   try {
//     this.props.onLoading(true);
//     const { id, number, status } = this.state;
//     await this.service.addTable(table(id, number, status[0].toUpperCase()));
//     this.props.onLoading(false);
//     alert(`Successfully add table..`);
//     // this.props.onCancelForm();
//   } catch (e) {
//     this.props.onLoading(false);
//     alert('Something went wrong..');
//   }
//   this.setState({
//     isSubmitting: false,
//     id: '',
//     status: 'choose',
//   });
// };
