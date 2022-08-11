import { useDeps } from '../../shared/api/DepsContext';
import OrderList from './components/OrderList/OrderList';
import OrderMenu from './components/OrderMenu/OrderMenu';
import './TransactionView.css';


const TransactionView = (props) => {
  const { menuService } = useDeps();
  return (
    <div className='order-container'>
        <div className='order-menu-list-container'>
            <OrderMenu service={menuService}/>
        </div>
        <div className='order-list-container'>
            <OrderList/>
        </div>
    </div>
)
};

export default TransactionView;
