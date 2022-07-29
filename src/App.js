import { Component } from 'react';

const Menus = [
  { id: 'M001', name: 'Nasi Goreng', harga: '12000' },
  { id: 'M002', name: 'Nasi Padang', harga: '13000' },
  { id: 'M003', name: 'Nasi Rames', harga: '8000' },
];

const Tables = [
  { id: 'T001', availability: true },
  { id: 'T002', availability: true },
  { id: 'T003', availability: true },
];
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableList: Tables,
      menuList: Menus,
      isActive: true, // seharusnya false, untuk keperluan development
    };
  }

  handleSubmit = (key, value) => {
    console.log(value);
    this.setState({
      [key]: value,
    });
  };

  handleLog = (state = false) => {
    this.setState({
      isActive: state,
    });
  };

  handleDelete = (key, index) => {
    if (key === 'menu') {
      const confirmation = window.confirm(
        `apakah anda yakin ingin menghapus menu dengan id ${this.state.menuList[index].id}`
      );
      if (confirmation) {
        let Menus = this.state.menuList;
        Menus.splice(index, 1);
        this.setState({
          menuList: Menus,
        });
      }
    } else {
      const confirmation = window.confirm(
        `apakah anda yakin ingin menghapus table dengan id ${this.state.tableList[index].id}`
      );
      if (confirmation) {
        let Tables = this.state.tableList;
        Tables.splice(index, 1);
        this.setState({
          tableList: Tables,
        });
      }
    }
  };

  render() {
    return this.props.render({
      tableList: this.state.tableList,
      menuList: this.state.menuList,
      isActive: this.state.isActive,
      handleSubmit: this.handleSubmit,
      handleDelete: this.handleDelete,
      handleLog: this.handleLog,
    });
  }
}
