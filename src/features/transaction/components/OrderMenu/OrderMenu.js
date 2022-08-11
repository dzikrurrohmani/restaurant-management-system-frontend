import { Component } from 'react';
import OrderForm from '../OrderForm/OrderForm';
import { addOrder, addFBMenu } from '../../state/TransactionAction';
import { connect } from 'react-redux';
import './OrderMenu.css';
import { WithLoading } from '../../../../shared/WithLoading';

class OrderMenu extends Component {
  constructor(props) {
    super(props);
    this.service = props.service;
    this.state = {
      menuList: [],
      isShowingForm: false,
      menuSelected: {},
    };
  }

  getMenuByCategory = async (category) => {
    const menuByCategory = [];
    this.props.onLoading(true);
    try {
      console.log('masuk getall');
      const response = await this.service.getAllMenu();
      for (let menu of response.data) {
        if (menu.menuCategory === category) {
          menuByCategory.push(menu);
        }
      }
      this.props.onLoading(false);
    } catch (error) {
      this.props.onLoading(false);
      window.alert(error.message);
    } finally {
      return menuByCategory;
    }

  };

  onGetMenus = async () => {
    this.props.onLoading(true);
    try {
      const foods = await this.getMenuByCategory('food');
      const beverages = await this.getMenuByCategory('beverage');
      this.props.addFBMenu(foods, beverages);
      this.props.onLoading(false);
      this.handleGetFoodMenu('food');
    } catch (e) {
      alert(e);
    }
  };

  componentDidMount() {
    this.onGetMenus();
  }

  handleGetFoodMenu = (category) => {
    if (category === 'food') {
      this.setState({
        menuList: this.props.menus.catalogue.foods,
      });
    }
    if (category === 'beverage') {
      this.setState({
        menuList: this.props.menus.catalogue.beverages,
      });
    }
  };

  handleShowingForm = (menu) => {
    this.setState({
      isShowingForm: !this.state.isShowingForm,
      menuSelected: menu,
    });
  };

  handleAddOrder = (qty) => {
    this.props.addOrder(this.state.menuSelected, qty);
    this.setState({
      isShowingForm: false,
      menuSelected: {},
    });
  };
  render() {
    return (
      <div className="menu-item-container" style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
          <div>
            <div
              className="menu-item menu-header"
              onClick={() => this.handleGetFoodMenu('food')}
            >
              Food
            </div>
            <div
              className="menu-item menu-header"
              onClick={() => this.handleGetFoodMenu('beverage')}
            >
              Beverage
            </div>
          </div>
          <div
            style={{
              borderRight: '3px solid gainsboro',
              margin: '8px',
              height: '98%',
            }}
          ></div>
        </div>
        <div className="outer-container">
          <div className="menu-list-container">
            {this.state.menuList.map((f) => {
              return (
                <div
                  className="menu-item app-color"
                  onClick={() => this.handleShowingForm(f)}
                  key={f.menuId}
                >
                  {f.menuName}
                </div>
              );
            })}
            {this.state.isShowingForm && (
              <OrderForm
                onAddOrder={this.handleAddOrder}
                onCancel={this.handleShowingForm}
              />
            )}
          </div>
        </div>
        <div
          style={{
            borderRight: '3px solid gainsboro',
            margin: '8px',
            height: '98%',
            right: '0',
          }}
        ></div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addFBMenu,
  addOrder,
};
const mapStateToProps = (state) => {
  return {
    menus: state.transactionReducer,
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithLoading(OrderMenu));
