export const TableService = ({ doGet, doPost, doDelete }) => {
    const getAllTable = async () => {
      try {
        return await doGet({ url: 'table' });
      } catch (error) {
        throw error;
      }
    };
  
    const createTable = async (newPost) => {
      try {
        return await doPost({
          url: 'table',
          data: newPost,
        });
      } catch (error) {
        throw error;
      }
    };
  
    const deleteTableById = async (tableId) => {
      console.log(tableId);
      try {
        return await doDelete({
          url: 'table',
          data: tableId,
        });
      } catch (error) {
        throw error;
      }
    };
  
    return { getAllTable, createTable, deleteTableById };
  };
  