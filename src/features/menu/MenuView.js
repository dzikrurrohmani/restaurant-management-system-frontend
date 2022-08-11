import { DropDownList } from '../../shared/components/DropDownList';
import InputForm from '../../shared/components/InputForm/InputForm';

const MenuView = (props) => {
  const {
    newMenu,
    menus,
    isSubmitting,
    onSubmitting,
    onDeleteMenu,
    onCreateMenu,
    onChange,
  } = props;
  if (isSubmitting) {
    return (
      <div className="container-lg">
        <br/>
        <h1>Form Add Menu</h1>
        <div style={{width: '60%', marginLeft: '20%'}}>
          <div>
          <InputForm
            type="number"
            label="Menu ID"
            value={newMenu.menuId}
            placeholder="masukkan id"
            name="menuId"
            onChange={onChange}
          />
          <InputForm
            label="Menu Name"
            value={newMenu.menuName}
            placeholder="masukkan nama"
            name="menuName"
            onChange={onChange}
          />
          <InputForm
            label="Price"
            type="number"
            value={newMenu.menuPrice}
            placeholder="masukkan price"
            name="menuPrice"
            onChange={onChange}
          />
          <DropDownList
            label="Category"
            values={['choose', 'Food', 'Beverages']}
            onChange={onChange}
            name="menuCategory"
            value={newMenu.menuCategory}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '50px' }}>
          <button type="button" className="btn btn-warning" onClick={onCreateMenu}>
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
        <h1>Daftar Menu</h1>
        <div
          className="container-lg"
          style={{ display: 'flex', marginBottom: '20px' }}
        >
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => onSubmitting(true)}
          >
            Add Menu
          </button>
        </div>
        {menus.length ? (
          <table className="table table-striped mt-4">
            <thead>
              <tr>
                <th>#</th>
                <th>Menu Name</th>
                <th>Price</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {menus.map((menu, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{menu.menuId}</th>
                    <td>{menu.menuName}</td>
                    <td>{menu.menuPrice}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {
                          onDeleteMenu(menu.menuId);
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
