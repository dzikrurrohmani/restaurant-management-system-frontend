import '../App.css';
import Dashboard from '../manager/presentation/Dashboard';
import LoginView from '../features/login/LoginView';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import DashboardView from '../manager/presentation/DahsboardView';

const AppNavigationView = (props) => {
  const { isActive, handleLog, handleHeader } = props;
  console.log('AppNavView');
  return (
    <div className="App">
      <Routes>
        <Route
          index
          element={<LoginView handleLog={handleLog} handleHeader={handleHeader} />}
        />
        <Route element={isActive ? <Outlet /> : <Navigate to="/" replace />}>
          <Route
            path="/home/*"
            element={<Dashboard render={DashboardView} handleLog={handleLog} />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default AppNavigationView;
