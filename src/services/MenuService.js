export const MenuService = ({ doGet, doPost, doDelete }) => {
  const getAllMenu = async () => {
    try {
      return await doGet({ url: '/menu' });
    } catch (error) {
      throw error;
    }
  };

  const createMenu = async (newPost) => {
    try {
      return await doPost({
        url: '/menu',
        data: newPost,
      });
    } catch (error) {
      throw error;
    }
  };

  const deleteMenuById = async (menuId) => {
    console.log(menuId);
    try {
      return await doDelete({
        url: '/menu',
        data: menuId,
      });
    } catch (error) {
      throw error;
    }
  };

  return { getAllMenu, createMenu, deleteMenuById };
};
