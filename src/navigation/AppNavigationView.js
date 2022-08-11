import '../App.css';
import Dashboard from '../manager/presentation/Dashboard';
import DashboardView from '../manager/presentation/DahsboardView';
import Login from '../features/login/Login';
import LoginView from '../features/login/LoginView';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

const AppNavigationView = (props) => {
  const { isActive, handleLog } = props;
  console.log('AppNavView');
  return (
    <div className="App">
      <Routes>
        <Route
          index
          element={<Login handleLog={handleLog} render={LoginView} />}
        />
        <Route element={isActive ? <Outlet /> : <Navigate to="/" replace />}>
          <Route
            path="/home"
            element={<Dashboard render={DashboardView} handleLog={handleLog} />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default AppNavigationView;
