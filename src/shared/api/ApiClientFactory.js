export const ApiClientFactory = (client) => {
  const doPost = async ({url = '', data = null}) => {
    try {
      const response = await client.post(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const doGet = async ({url = ''}) => {
    console.log('ehm6');
    console.log(url);
    try {
      const response = await client.get(url);
      console.log(url);
      console.log('ehm5');
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const doDelete = async ({url = '', data = null}) => {
    try {
      const response = await client.delete(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return {
    doPost,
    doGet,
    doDelete,
  };
};
