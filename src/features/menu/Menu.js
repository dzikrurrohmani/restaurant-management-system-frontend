import { Component } from 'react';
import { menu } from '../../model/menu';
import MenuService from '../../services/MenuService';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      price: '',
      category: 'choose',
      isSubmitting: false,
      menus: [],
    };
    this.service = MenuService();
  }

  componentDidMount() {
    this.getAllMenu();
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmitting = (value) => {
    this.setState({
      isSubmitting: value,
    });
  };

  getAllMenu = async () => {
    // this.props.handleShowLoading(true);
    try {
      const menus = await this.service.getMenu();
      this.setState({
        menus: menus,
      });
      // this.props.handleShowLoading(false);
    } catch (e) {
      // this.props.handleShowLoading(false);
      alert('oops');
    }
  };

  onSubmit = async () => {
    try {
      // this.props.handleShowLoading(true);
      const { id, name, price, category } = this.state;
      const result = await this.service.addMenu(
        menu(id, name, price, category)
      );
      // this.props.handleShowLoading(false);
      alert(`Successfully add ${result.name}`);
      // this.props.onCancelForm();
    } catch (e) {
      // this.props.handleShowLoading(false);
      alert('Maaf terjadi kesalahan sistem');
    }
    this.setState({
      isSubmitting: false,
      id: '',
      name: '',
      price: '',
      category: 'choose',
    });
  };

  onDelete = async (id) => {
    const result = window.confirm('Are you sure want to delete ?');
    if (result) {
      // this.props.handleShowLoading(true);
      try {
        await this.service.deleteMenu(id);
        await this.getAllMenu();
        // this.props.handleShowLoading(false);
      } catch (e) {
        // this.props.handleShowLoading(false);
        alert('Maaf terjadi kesalahan sistem');
      }
    }
  };

  render() {
    return this.props.render({
      id: this.state.id,
      name: this.state.name,
      price: this.state.price,
      category: this.state.category,
      menuList: this.state.menus,
      handleDelete: this.onDelete,
      isSubmitting: this.state.isSubmitting,
      onSubmitting: this.onSubmitting,
      onSubmit: this.onSubmit,
      onChange: this.onChange,
    });
  }
}
