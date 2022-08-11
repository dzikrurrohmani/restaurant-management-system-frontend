import { Outlet, useRoutes } from 'react-router-dom';
import UseMenu from '../../features/menu/UseMenu';
import MenuView from '../../features/menu/MenuView';
import UseTable from '../../features/table/UseTable';
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
          <HeaderComponent {...props} />
          <Outlet/>
          <FooterComponent />
        </div>
      ),
      children: [
        {
          path: '/',
          element: <BodyComponent view={<Welcome />} />,
        },
        {
          path: 'menu/*',
          element: <BodyComponent view={<UseMenu render={MenuView} />} />,
        },
        {
          path: 'table/*',
          element: <BodyComponent view={<UseTable render={TableView} />} />,
        },
        {
          path: 'transaction/*',
          element: <BodyComponent view={<TransactionView />} />,
        },
      ],
    },
  ]);

  return routes;
};

export default DashboardView;
