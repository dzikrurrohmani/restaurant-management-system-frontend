import 'bootstrap/dist/css/bootstrap.min.css';
export default function MenuView(props) {
  return (
    <div className="container-lg">
      <h1>Daftar Menu</h1>
      <button
        type="button"
        className="btn btn-primary"
        // onClick={() => this.deleteMenu(index)}
      >
        Add Menu
      </button>
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
          {props.menuList.length ? (
            props.menuList.map((menu, index) => {
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
                      // onClick={() => this.deleteMenu(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <h3>Tidak ada menu yang tersedia</h3>
          )}
        </tbody>
      </table>
    </div>
  );
}
