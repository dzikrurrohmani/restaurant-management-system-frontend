import BodyComponent from './BodyComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';

export default function DashboardView(props) {
  const { view, welcomeView, menuView, tableView, transactionView, handleLog } =
    props;
  return (
    <div className="min-vh-100">
      <HeaderComponent
        handleLog={handleLog}
        welcomeView={welcomeView}
        menuView={menuView}
        tableView={tableView}
        transactionView={transactionView}
      />
      <BodyComponent view={view} />
      <FooterComponent />
    </div>
  );
}
