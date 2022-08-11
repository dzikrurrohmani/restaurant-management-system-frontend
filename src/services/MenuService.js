export const MenuService = ({doGet, doPost, doDelete}) => {

  const getAllMenu = async () => {
      try {
          return await doGet({url: '/menu'})
      } catch (e) {
          throw e
      }
  }

  const createMenu = async (newPost) => {
      try {
          return await doPost({
              url: '/menu',
              data: newPost
          })
      } catch (e) {
          throw e
      }
  }

  const deleteMenuById = async (menuId) => {
      try {
          return await doDelete({
              url : '/menu',
              data : menuId
          })
      } catch (error) {
          
      }
  }

  return {getAllMenu, createMenu, deleteMenuById}
}