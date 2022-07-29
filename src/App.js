import { Component } from 'react';

const Menus = [
  { id: 'M001', name: 'Nasi Goreng', harga: '12000' },
  { id: 'M002', name: 'Nasi Padang', harga: '13000' },
  { id: 'M003', name: 'Nasi Rames', harga: '8000' },
];

const Tables = [
  { id: 'T001', nomor: 'Nasi Goreng', availability: true },
  { id: 'T002', nomor: 'Nasi Padang', availability: true },
  { id: 'T003', nomor: 'Nasi Rames', availability: true },
];
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableList: Tables,
      menuList: Menus,
      isActive: false,
    };
  }

  handleSubmit = (key, value) => {
    let newList = [...this.state.key, value];
    this.setState({
      [key]: newList,
    });
  };

  handleLog = (state=false) => {
    this.setState({
      isActive: state,
    });
  };

  render() {
    return this.props.render({
      tableList: this.state.tableList,
      menuList: this.state.menuList,
      isActive: this.state.isActive,
      handleSubmit: this.handleSubmit,
      handleLog: this.handleLog,
    });
  }
}
