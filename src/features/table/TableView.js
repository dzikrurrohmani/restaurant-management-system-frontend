import InputForm from '../../shared/InputForm';

export default function TableView(props) {
  if (props.isSubmitting) {
    return (
      <div
      className="container-lg">
        <h1>Form Add Table</h1>
        <div>
          <InputForm
            label="Table ID"
            type="text"
            value={props.id}
            placeholder="masukkan id"
            id="id"
            onChange={props.onChange}
          />
          <InputForm
            label="Status"
            type="text"
            value={props.status}
            placeholder="masukkan status"
            id="status"
            onChange={props.onChange}
          />
        </div>
        <div
          style={{ display: 'flex', justifyContent: 'center', gap: '50px' }}
        >
          <button type="button" class="btn btn-warning" onClick={props.onSubmit}>
            Submit
          </button>
          <button type="button" class="btn btn-danger" onClick={() => props.onSubmitting(false)}>
            Cancel
          </button>
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
            onClick={() => props.onSubmitting(true)}
          >
            Add Table
          </button>
        </div>
        {props.tableList.length ? (
          <table className="table table-striped mt-4">
            <thead>
              <tr>
                <th>No</th>
                <th>ID</th>
                <th>Table Number</th>
                <th>Status</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {props.tableList.map((table, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{table.id}</td>
                    <td>{table.number}</td>
                    <td>
                      {table.status ? 'AVAILABLE' : 'NOT AVAILABILE'}
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => props.handleDelete('table', table.id)}
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
