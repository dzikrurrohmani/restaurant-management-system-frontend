import { DropDownList } from '../../shared/components/DropDownList';
import InputForm from '../../shared/components/InputForm';

const MenuView = (props) => {
  if (props.isSubmitting) {
    return (
      <div className="container-lg">
        <h1>Form Add Menu</h1>
        <div>
          <InputForm
            label="Menu ID"
            value={props.id}
            placeholder="masukkan id"
            id="id"
            onChange={props.onChange}
          />
          <InputForm
            label="Menu Name"
            value={props.name}
            placeholder="masukkan nama"
            id="name"
            onChange={props.onChange}
          />
          <InputForm
            label="Price"
            type="number"
            value={props.price}
            placeholder="masukkan price"
            id="price"
            onChange={props.onChange}
          />
          <DropDownList
            label="Category"
            values={[props.category, 'Food', 'Beverages']}
            onChange={props.onChange}
            name="category"
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '50px' }}>
          <button
            type="button"
            className="btn btn-warning"
            onClick={props.onSubmit}
          >
            Submit
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => props.onSubmitting(false)}
          >
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
                <th>Menu Name</th>
                <th>Price</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {props.menuList.map((menu, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{menu.menuId}</td>
                    <td>{menu.menuName}</td>
                    {/* <td>{menu.menuPrice}</td> */}
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {
                          props.handleDelete(menu.id);
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
};

export default MenuView;
