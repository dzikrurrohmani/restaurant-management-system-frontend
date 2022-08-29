import { useState, useEffect } from 'react';
import OrderForm from '../OrderForm/OrderForm';
import { addOrder, addFBMenu } from '../../state/TransactionAction';
import { connect } from 'react-redux';
import './OrderMenu.css';
import { WithLoading } from '../../../../shared/WithLoading';
import { useDeps } from '../../../../shared/api/DepsContext';

const OrderMenu = (props) => {
  const { menuService } = useDeps();
  const [menuList, setMenuList] = useState([]);
  const [isShowingForm, setIsShowingForm] = useState(false);
  const [menuSelected, setMenuSelected] = useState({});

  const getMenuByCategory = async (category) => {
    const menuByCategory = [];
    props.onLoading(true);
    try {
      console.log('masuk getall');
      const response = await (() => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(menuService.getAllMenu());
          }, 1000);
        });
      })();
      for (let menu of response.data) {
        if (menu.menuCategory === category) {
          menuByCategory.push(menu);
        }
      }
      props.onLoading(false);
    } catch (error) {
      props.onLoading(false);
      window.alert(error.message);
    } finally {
      return menuByCategory;
    }
  };

  const onGetMenus = async () => {
    props.onLoading(true);
    try {
      const foods = await getMenuByCategory('food');
      const beverages = await getMenuByCategory('beverage');
      props.addFBMenu(foods, beverages);
      console.log('fodd category', foods, beverages);
      props.onLoading(false);
      setMenuList(foods);
    } catch (e) {
      alert(e);
    } finally {
    }
  };

  useEffect(() => {
    onGetMenus();
  }, []);

  const handleGetFoodMenu = (category) => {
    console.log(menuList);
    console.log('seharusnya re render');
    category === 'food'
      ? setMenuList(props.menus.catalogue.foods)
      : setMenuList(props.menus.catalogue.beverages);
    console.log(menuList);
  };

  const handleShowingForm = (menu) => {
    setIsShowingForm(!isShowingForm);
    setMenuSelected(menu);
  };

  const handleAddOrder = (qty) => {
    props.addOrder(menuSelected, qty);
    setIsShowingForm(false);
    setMenuSelected({});
  };

  return (
    <div
      className="menu-item-container"
      style={{
        display: 'flex',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          height: '100%',
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div
            className="menu-item menu-header"
            onClick={() => handleGetFoodMenu('food')}
          >
            Food
          </div>
          <div
            className="menu-item menu-header"
            onClick={() => handleGetFoodMenu('beverage')}
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
        <div className="outer-container">
          <div className="menu-list-container">
            {menuList.map((f) => {
              return (
                <div
                  className="menu-item app-color"
                  onClick={() => handleShowingForm(f)}
                  key={f.menuId}
                >
                  {f.menuName}
                </div>
              );
            })}
            {isShowingForm && (
              <OrderForm
                onAddOrder={handleAddOrder}
                onCancel={handleShowingForm}
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
    </div>
  );
};
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

// import { Component } from 'react';
// import MenuService from '../../../../services/MenuService';
// import OrderForm from '../OrderForm/OrderForm';
// import { addOrder, addFBMenu } from '../../state/TransactionAction';
// import { connect } from 'react-redux';
// import './OrderMenu.css';
// import { WithLoading } from '../../../../shared/WithLoading';
// import { WithDep } from '../../../../manager/dependencies/WithDep';

// class OrderMenu extends Component {
//   constructor(props) {
//     super(props);
//     this.service = props.MenuService;
//     this.state = {
//       menuList: [],
//       isShowingForm: false,
//       menuSelected: {},
//     };
//   }

//   onGetMenus = async () => {
//     this.props.onLoading(true);
//     try {
//       const foods = await this.service.getMenuByCategory('food');
//       const beverages = await this.service.getMenuByCategory('beverage');
//       this.props.addFBMenu(foods, beverages);
//       this.props.onLoading(false);
//       this.handleGetFoodMenu('food');
//     } catch (e) {
//       alert(e);
//     }
//   };

//   componentDidMount() {
//     this.onGetMenus();
//   }

//   handleGetFoodMenu = (category) => {
//     if (category === 'food') {
//       this.setState({
//         menuList: this.props.menus.catalogue.foods,
//       });
//     }
//     if (category === 'beverage') {
//       this.setState({
//         menuList: this.props.menus.catalogue.beverages,
//       });
//     }
//   };

//   handleShowingForm = (menu) => {
//     this.setState({
//       isShowingForm: !this.state.isShowingForm,
//       menuSelected: menu,
//     });
//   };

//   handleAddOrder = (qty) => {
//     this.props.addOrder(this.state.menuSelected, qty);
//     this.setState({
//       isShowingForm: false,
//       menuSelected: {},
//     });
//   };
//   render() {
//     return (
//       <div className="menu-item-container" style={{ display: 'flex' }}>
//         <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
//           <div>
//             <div
//               className="menu-item menu-header"
//               onClick={() => this.handleGetFoodMenu('food')}
//             >
//               Food
//             </div>
//             <div
//               className="menu-item menu-header"
//               onClick={() => this.handleGetFoodMenu('beverage')}
//             >
//               Beverage
//             </div>
//           </div>
//           <div
//             style={{
//               borderRight: '3px solid gainsboro',
//               margin: '8px',
//               height: '98%',
//             }}
//           ></div>
//         </div>
//         <div className="outer-container">
//           <div className="menu-list-container">
//             {this.state.menuList.map((f) => {
//               return (
//                 <div
//                   className="menu-item app-color"
//                   onClick={() => this.handleShowingForm(f)}
//                   key={f.id}
//                 >
//                   {f.name}
//                 </div>
//               );
//             })}
//             {this.state.isShowingForm && (
//               <OrderForm
//                 onAddOrder={this.handleAddOrder}
//                 onCancel={this.handleShowingForm}
//               />
//             )}
//           </div>
//         </div>
//         <div
//           style={{
//             borderRight: '3px solid gainsboro',
//             margin: '8px',
//             height: '98%',
//             right: '0',
//           }}
//         ></div>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = {
//   addFBMenu,
//   addOrder,
// };
// const mapStateToProps = (state) => {
//   return {
//     menus: state.transactionReducer,
//   };
// };
// export default WithDep(
//   connect(mapStateToProps, mapDispatchToProps)(WithLoading(OrderMenu)),
//   ['MenuService']
// );
