import OrderList from './components/OrderList/OrderList';
import OrderMenu from './components/OrderMenu/OrderMenu';
import './TransactionView.css';


const TransactionView = (props) => {
  return (
    <div className='container-lg'>
            <div className='order-container'>
        <div className='order-menu-list-container'>
            <OrderMenu />
        </div>
        <div className='order-list-container'>
            <OrderList/>
        </div>
    </div>
    </div>
)
};

export default TransactionView;
