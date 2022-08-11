import { Component } from 'react';
import { menu } from '../../model/menu';
import { WithLoading } from '../../shared/WithLoading';
import { WithDep } from "../../manager/dependencies/WithDep";

class Menu extends Component {
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
    this.service = props.MenuService;
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
    this.props.onLoading(true);
    try {
      const menus = await this.service.getMenu();
      this.setState({
        menus: menus,
      });
      this.props.onLoading(false);
    } catch (e) {
      this.props.onLoading(false);
      alert('Something went wrong..');
    }
  };

  onSubmit = async () => {
    try {
      this.props.onLoading(true);
      const { id, name, price, category } = this.state;
      await this.service.addMenu(
        menu(id, name, price, category)
      );
      this.props.onLoading(false);
      alert(`Successfully add menu..`);
      // this.props.onCancelForm();
    } catch (e) {
      this.props.onLoading(false);
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

  onDelete = async (id) => {
    const result = window.confirm('Are you sure want to delete ?');
    if (result) {
      this.props.onLoading(true);
      try {
        await this.service.deleteMenu(id);
        await this.getAllMenu();
        this.props.onLoading(false);
      } catch (e) {
        this.props.onLoading(false);
        alert('Something went wrong..');
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

export default WithDep(WithLoading(Menu), ['MenuService']);
