import '../App.css';
import Dashboard from '../manager/presentation/Dashboard';
import DashboardView from '../manager/presentation/DahsboardView';
import Login from '../features/login/Login';
import LoginView from '../features/login/LoginView';

export default function AppNavigationView(props) {
  const { tableList, menuList, isActive, handleSubmit, handleDelete, handleLog } = props;
  return (
    <div className="App">
      {isActive ? (
        <Dashboard
          render={DashboardView}
          tableList={tableList}
          menuList={menuList}
          handleSubmit={handleSubmit}
          handleDelete={handleDelete}
          handleLog={handleLog}
        />
      ) : (
        <Login handleLog={handleLog} render={LoginView} />
      )}
    </div>
  );
}
