import { Component, useState, useRef, useEffect } from 'react';
import { menu } from '../../model/menu';
import { useDeps } from '../../shared/api/DepsContext';
import { WithLoading } from '../../shared/WithLoading';

const UseMenu = (props) => {
  // const [id, setId] = useState('');
  // const [number, setNumber] = useState('');
  // const [status, setStatus] = useState('choose');
  
  const { menuService } = useDeps();
  const [newMenu, setNewMenu] = useState({ menuName: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    getAllMenu();
  }, []);

  const onChange = (event) => {
    setNewMenu({
      ...newMenu,
      [event.target.name]: event.target.value,
    });
  };

  const getAllMenu = async () => {
    console.log('UseMenugetall1');
    props.onLoading(true);
    try {
      const response = await menuService.getAllMenu();
      console.log('UseMenugetall2');
      setMenus(response.data);
      props.onLoading(false);
    } catch (e) {
      console.log('UseMenugetall3', e.message);
      props.onLoading(false);
      alert('Something went wrong..');
    }
  };

  const onSubmit = async () => {
    try {
      props.onLoading(true);
      const { id, name, price, category } = this.state;
      await menuService.addMenu(menu(id, name, price, category));
      props.onLoading(false);
      alert(`Successfully add menu..`);
      // props.onCancelForm();
    } catch (e) {
      props.onLoading(false);
      alert('Something went wrong..');
    }
    this.setState({
      isSubmitting: false,
      id: '',
      name: '',
      price: '',
      category: 'choose',
    });
  };

  const onDelete = async (id) => {
    const result = window.confirm('Are you sure want to delete ?');
    if (result) {
      props.onLoading(true);
      try {
        await menuService.deleteMenu(id);
        await this.getAllMenu();
        props.onLoading(false);
      } catch (e) {
        props.onLoading(false);
        alert('Something went wrong..');
      }
    }
  };
  return props.render({
    name: newMenu.menuName,
    menuList: menus,
    handleDelete: onDelete,
    isSubmitting: isSubmitting,
    onSubmitting: setIsSubmitting,
    onSubmit,
    onChange,
  });
};

export default WithLoading(UseMenu);

// import { Component } from 'react';
// import { menu } from '../../model/menu';
// import { useDeps } from '../../shared/api/DepsContext';
// import { WithLoading } from '../../shared/WithLoading';

// class UseMenu extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       id: '',
//       name: '',
//       price: '',
//       category: 'choose',
//       isSubmitting: false,
//       menus: [],
//     };
//     menuService = useDeps().menuService;
//   }

//   componentDidMount() {
//     this.getAllMenu();
//   }

//   onChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   };

//   onSubmitting = (value) => {
//     this.setState({
//       isSubmitting: value,
//     });
//   };

//   getAllMenu = async () => {
//     props.onLoading(true);
//     try {
//       const response = await menuService.getAllMenu();
//       this.setState({
//         menus: response.data,
//       });
//       props.onLoading(false);
//     } catch (e) {
//       props.onLoading(false);
//       alert('Something went wrong..');
//     }
//   };

//   onSubmit = async () => {
//     try {
//       props.onLoading(true);
//       const { id, name, price, category } = this.state;
//       await menuService.addMenu(
//         menu(id, name, price, category)
//       );
//       props.onLoading(false);
//       alert(`Successfully add menu..`);
//       // props.onCancelForm();
//     } catch (e) {
//       props.onLoading(false);
//       alert('Something went wrong..');
//     }
//     this.setState({
//       isSubmitting: false,
//       id: '',
//       name: '',
//       price: '',
//       category: 'choose',
//     });
//   };

//   onDelete = async (id) => {
//     const result = window.confirm('Are you sure want to delete ?');
//     if (result) {
//       props.onLoading(true);
//       try {
//         await menuService.deleteMenu(id);
//         await this.getAllMenu();
//         props.onLoading(false);
//       } catch (e) {
//         props.onLoading(false);
//         alert('Something went wrong..');
//       }
//     }
//   };

//   render() {
//     return props.render({
//       id: this.state.id,
//       name: this.state.name,
//       price: this.state.price,
//       category: this.state.category,
//       menuList: this.state.menus,
//       handleDelete: this.onDelete,
//       isSubmitting: this.state.isSubmitting,
//       onSubmitting: this.onSubmitting,
//       onSubmit: this.onSubmit,
//       onChange: this.onChange,
//     });
//   }
// }

// export default WithLoading(UseMenu);
