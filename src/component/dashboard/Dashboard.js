import { Component } from 'react';
import Menu from '../feature/menu/Menu';
import MenuView from '../feature/menu/MenuView';
import Table from '../feature/table/Table';
import TableView from '../feature/table/TableView';
import Welcome from '../feature/welcome/Welcome';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: <Welcome />,
    };
  }

  welcomeView = () => {
    this.setState({
      view: <Welcome />,
    });
  };
  menuView = () => {
    this.setState({
      view: (
        <Menu
          stateKey="menuList"
          menuList={this.props.menuList}
          handleSubmit={this.props.handleSubmit}
          render={MenuView}
        />
      ),
    });
  };
  tableView = () => {
    this.setState({
      view: (
        <Table
          stateKey="tableList"
          tableList={this.props.tableList}
          handleSubmit={this.props.handleSubmit}
          render={TableView}
        />
      ),
    });
  };

  render() {
    return this.props.render({
      view: this.state.view,
      welcomeView: this.welcomeView,
      menuView: this.menuView,
      tableView: this.tableView,
      handleLog: this.props.handleLog,
    });
  }
}
