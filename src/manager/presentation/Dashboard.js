import { Component } from 'react';
import Menu from '../../features/menu/Menu';
import MenuView from '../../features/menu/MenuView';
import Table from '../../features/table/Table';
import TableView from '../../features/table/TableView';
import TransactionView from '../../features/transaction/TransactionView';
import Welcome from '../../features/welcome/Welcome';

const Dashboard = props => {
  console.log('Dashboard', props.handleLog);
  return props.render({handleLog: props.handleLog});
};

export default Dashboard;
