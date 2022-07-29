import InputForm from "../../shared/InputForm";

export default function MenuView(props) {
  if (props.isSubmitting) {
    return (
      <div className="container-lg">
        <h1>Form Add Menu</h1>
        <div>
          <InputForm
            label="ID Menu"
            type="text"
            value={props.id}
            placeholder="masukkan id"
            id="id"
            onChange={props.onChange}
          />
          <InputForm
            label="Nama Menu"
            type="text"
            value={props.name}
            placeholder="masukkan nama"
            id="name"
            onChange={props.onChange}
          />
          <InputForm
            label="Harga"
            type="text"
            value={props.harga}
            placeholder="masukkan harga"
            id="harga"
            onChange={props.onChange}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '50px' }}>
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
        <h1>Daftar Menu</h1>
        <div
          className="container-lg"
          style={{ display: 'flex', marginBottom: '20px' }}
        >
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => props.onSubmitting(true)}
          >
            Add Menu
          </button>
        </div>
        {props.menuList.length ? (
          <table className="table table-striped mt-4">
            <thead>
              <tr>
                <th>No</th>
                <th>ID</th>
                <th>Nama</th>
                <th>Harga</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {props.menuList.map((menu, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{menu.id}</td>
                    <td>{menu.name}</td>
                    <td>{menu.harga}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {
                          props.handleDelete('menu', index);
                        }}
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
          <h3>Tidak ada menu yang tersedia</h3>
        )}
      </div>
    );
  }
}
