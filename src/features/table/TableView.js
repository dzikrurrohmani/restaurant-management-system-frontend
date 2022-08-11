import { Badge } from 'react-bootstrap';
import { DropDownList } from '../../shared/components/DropDownList';
import InputForm from '../../shared/components/InputForm/InputForm';

export default function TableView(props) {
  const {
    newTable,
    tables,
    isSubmitting,
    onSubmitting,
    onDeleteTable,
    onCreateTable,
    onChange,
  } = props;
  if (isSubmitting) {
    return (
      <div className="container-lg">
        <br />
        <h1>Form Add Table</h1>
        <div style={{ width: '60%', marginLeft: '20%' }}>
          <div>
            <InputForm
              type="number"
              label="Table ID"
              value={newTable.tableId}
              placeholder="masukkan id"
              name="tableId"
              onChange={onChange}
            />
            <InputForm
              label="Table Number"
              value={newTable.tableDescription}
              placeholder="masukkan status"
              name="tableDescription"
              onChange={onChange}
            />
            <DropDownList
              label="Status"
              values={['choose', 'Available', 'Unavailable']}
              onChange={onChange}
              name="tableAvailability"
              value={newTable.tableAvailability}
            />
          </div>
          <div
            style={{ display: 'flex', justifyContent: 'center', gap: '50px' }}
          >
            <button
              type="button"
              className="btn btn-warning"
              onClick={onCreateTable}
            >
              Submit
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => onSubmitting(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container-lg">
        <h1>Daftar Table</h1>
        <div
          className="container-lg"
          style={{ display: 'flex', marginBottom: '20px' }}
        >
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => onSubmitting(true)}
          >
            Add Table
          </button>
        </div>
        {tables.length ? (
          <table className="table table-striped mt-4">
            <thead>
              <tr>
                <th>#</th>
                <th>Table Number</th>
                <th>Status</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {tables.map((table, index) => {
                console.log(table.tableAvailability);
                return (
                  <tr key={index}>
                    <th scope="row">{table.tableId}</th>
                    <td>{table.tableDescription}</td>
                    <td>
                      <Badge
                        bg={table.tableAvailability ? 'primary' : 'danger'}
                      >
                        {table.tableAvailability ? <>A</> : <>U</>}
                      </Badge>
                      {/* {table.status === 'A' ? 'AVAILABLE' : 'NOT AVAILABILE'} */}
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => onDeleteTable(table.tableId)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <h3>Tidak ada table yang tersedia</h3>
        )}
      </div>
    );
  }
}
