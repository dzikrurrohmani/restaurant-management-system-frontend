import { tables } from '../data';

const TableService = () => {
  const getTable = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(tables);
      }, 2000);
    });
  };

  const addTable = async (newTable) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        tables.push(newTable);
        resolve(newTable);
      }, 1000);
    });
  };

  const deleteTable = async (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = tables.findIndex((table) => table.id === id);
        tables.splice(index, 1);
        resolve(index);
      }, 1000);
    });
  };
  return {
    getTable,
    addTable,
    deleteTable,
  };
};

export default TableService;
