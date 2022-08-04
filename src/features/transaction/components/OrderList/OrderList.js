import { clearOrder, submitOrder } from '../../state/TransactionAction';
import { connect } from 'react-redux';
import { Component } from 'react';
import './OrderList.css';

export class OrderList extends Component {
  handleClearOrder = () => {
    this.props.clearOrder();
  };

  handleSubmitOrder = async () => {
    try {
      await this.props.submitOrder();
      alert('Succesfully create order..');
    } catch (e) {
      alert(e);
    } finally {
      this.props.clearOrder();
    }
  };

  componentWillUnmount() {
    this.handleClearOrder();
  }

  render() {
    return (
      <div>
        {this.props.order.orderItems.map((item, index) => {
          return (
            <div key={index} className='order-item app-color'>
              <div>
                {item.qty} {item.menu.name}
              </div>
              <div>{item.menu.price * item.qty}</div>
            </div>
          );
        })}
        {this.props.order.orderItems.length > 0 ? (
          <>
            <div className='order-total app-color'>
              <div>Total</div>
              {this.props.order.total}
            </div>
            <br />
            <div className='order-action app-color' onClick={this.handleSubmitOrder}>Order</div>
            <div className='cancel-action app-color' onClick={this.handleClearOrder}>Cancel</div>
          </>
        ) : (
          <div className='order-list-empty'>No Items</div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = {
  clearOrder, submitOrder
};
const mapStateToProps = (state) => {
  return {
    order: state.transactionReducer,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(OrderList);
