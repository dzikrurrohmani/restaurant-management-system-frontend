export const TableService = ({doGet, doPost, doDelete}) => {

  const getAllTable = async () => {
      try {
          return await doGet({url: '/table'})
      } catch (e) {
          throw e
      }
  }

  const createTable = async (newPost) => {
      try {
          return await doPost({
              url: '/table',
              data: newPost
          })
      } catch (e) {
          throw e
      }
  }

  const deleteTableById = async (tableId) => {
      try {
          return await doDelete({
              url : '/table',
              data : tableId
          })
      } catch (error) {
          
      }
  }

  return {getAllTable, createTable, deleteTableById}
}
