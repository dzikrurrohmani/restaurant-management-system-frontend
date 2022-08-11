const Dashboard = props => {
  console.log('Dashboard', props.handleLog);
  return props.render(props);
};

export default Dashboard;
