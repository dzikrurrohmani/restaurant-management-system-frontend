import { Outlet, useRoutes } from 'react-router-dom';
import Menu from '../../features/menu/Menu';
import MenuView from '../../features/menu/MenuView';
import Table from '../../features/table/Table';
import TableView from '../../features/table/TableView';
import TransactionView from '../../features/transaction/TransactionView';
import Welcome from '../../features/welcome/Welcome';
import BodyComponent from './BodyComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';

const DashboardView = (props) => {
  console.log('DashboardView', props.handleLog);
  let routes = useRoutes([
    {
      path: '/',
      element: (
        <div className="min-vh-100">
          <HeaderComponent handleLog={props.handleLog} />
          <Outlet
            style={{
              position: 'absolut',
              minHeight: '100vh',
              width: '100%',
              padding: '57px 0 25px 0',
              zIndex: '101',
            }}
          />
          <FooterComponent />
        </div>
      ),
      children: [
        {
          path: '/',
          element: <BodyComponent view={<Welcome />} />,
        },
        {
          path: 'menu',
          element: <BodyComponent view={<Menu render={MenuView} />} />,
        },
        {
          path: 'table',
          element: <BodyComponent view={<Table render={TableView} />} />,
        },
        {
          path: 'transaction',
          element: <BodyComponent view={<TransactionView />} />,
        },
      ],
    },
  ]);

  return routes;
};

export default DashboardView;
