import './App.css';
import Dashboard from './component/dashboard/Dashboard';
import DashboardView from './component/dashboard/DahsboardView';
import Login from './component/feature/login/Login';
import LoginView from './component/feature/login/LoginView';

export default function AppView(props) {
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
