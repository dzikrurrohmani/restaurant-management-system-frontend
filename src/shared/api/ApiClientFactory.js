export const ApiClientFactory = (client) => {
  const doPost = async ({ url = '', data = null }) => {
    try {
      const response = await client.post(url, data);
      if (url === '/login') {
        return response.data
      }
      if (response.data.responseCode === '00') {
        return response.data;
      } else {
        return new Error(response.data.responseMessage);
      }
    } catch (error) {
      throw error;
    }
  };

  const doGet = async ({ url = '' }) => {
    try {
      const response = await client.get(url);
      if (response.data.responseCode === '00') {
        return response.data;
      } else {
        return new Error(response.data.responseMessage);
      }
    } catch (error) {
      throw error;
    }
  };

  const doDelete = async ({ url = '', data = null }) => {
    try {
      const response = await client.delete(url, {data});
      if (response.data.responseCode === '00') {
        return response.data;
      } else {
        return new Error(response.data.responseMessage);
      }
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
