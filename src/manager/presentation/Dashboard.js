import { Component } from 'react';
import Menu from '../../features/menu/Menu';
import MenuView from '../../features/menu/MenuView';
import Table from '../../features/table/Table';
import TableView from '../../features/table/TableView';
import Welcome from '../../features/welcome/Welcome';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 1,
    };
  }

  welcomeView = () => {
    this.setState({
      view: 1,
    });
  };
  menuView = () => {
    console.log('setstate view');
    this.setState({
      view: 2,
    });
  };
  tableView = () => {
    this.setState({
      view: 3,
    });
  };

  render() {
    let tampil;
    switch (this.state.view) {
      case 2:
        tampil = (
          <Menu
            stateKey="menuList"
            menuList={this.props.menuList}
            handleSubmit={this.props.handleSubmit}
            handleDelete={this.props.handleDelete}
            menuView={this.menuView}
            render={MenuView}
          />
        );
        break;
      case 3:
        tampil = (
          <Table
            stateKey="tableList"
            tableList={this.props.tableList}
            handleSubmit={this.props.handleSubmit}
            handleDelete={this.props.handleDelete}
            tableView={this.tableView}
            render={TableView}
          />
        );
        break;
      default:
        tampil = (
          <Welcome menuView={this.menuView} tableView={this.tableView} />
        );
        break;
    }
    return this.props.render({
      view: tampil,
      welcomeView: this.welcomeView,
      menuView: this.menuView,
      tableView: this.tableView,
      handleLog: this.props.handleLog,
    });
  }
}
