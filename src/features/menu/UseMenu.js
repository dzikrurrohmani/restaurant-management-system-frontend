import { useState, useEffect } from 'react';
import { useDeps } from '../../shared/api/DepsContext';
import { WithLoading } from '../../shared/WithLoading';

const UseMenu = (props) => {
  const { menuService } = useDeps();
  const [newMenu, setNewMenu] = useState({
    menuId: '',
    menuName: '',
    menuPrice: 0,
    menuCategory: 'choose',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    onGetAllMenu();
  }, [isSubmitting]);

  const onChange = (event) => {
    setNewMenu({
      ...newMenu,
      [event.target.name]:
        event.target.type === 'number'
          ? Number(event.target.value)
          : event.target.value,
    });
  };

  const onGetAllMenu = async () => {
    props.onLoading(true);
    try {
      console.log('masuk getall');
      const response = await menuService.getAllMenu();
      setMenus(response.data);
      props.onLoading(false);
    } catch (error) {
      props.onLoading(false);
      window.alert(error.message);
    }
  };

  const onCreateMenu = async () => {
    if (
      Number(newMenu.menuId) &&
      newMenu.menuName &&
      Number(newMenu.menuPrice) &&
      newMenu.menuCategory !== 'choose'
    ) {
      if (!menus.map((menu) => menu.menuId).includes(newMenu.menuId)) {
        props.onLoading(true);
        try {
          const response = await menuService.createMenu(newMenu);
          props.onLoading(false);
          alert(`Successfully add menu with id ${response.data.menuId}`);
          setIsSubmitting(false);
        } catch (error) {
          props.onLoading(false);
          window.alert(error.message);
        }
      } else {
        window.alert(`menu with id ${newMenu.menuId} is already exist`);
      }
    } else {
      window.alert('please fill all required fielda');
    }
  };

  const onDeleteMenu = async (id) => {
    const result = window.confirm(
      `Are you sure want to delete menu with id ${id}?`
    );
    if (result) {
      props.onLoading(true);
      try {
        const response = await menuService.deleteMenuById({
          menuId: Number(id),
        });
        await onGetAllMenu();
        props.onLoading(false);
        alert(`Successfully delete menu with id ${response.data.menuId}`);
      } catch (error) {
        props.onLoading(false);
        window.alert(error.message);
      }
    }
  };

  const onSubmitting = (value) => {
    setNewMenu({
      menuId: '',
      menuName: '',
      menuPrice: 0,
      menuCategory: 'choose',
    });
    setIsSubmitting(value);
  };

  return props.render({
    newMenu,
    menus,
    isSubmitting,
    onSubmitting,
    onDeleteMenu,
    onCreateMenu,
    onChange,
  });
};

export default WithLoading(UseMenu);
