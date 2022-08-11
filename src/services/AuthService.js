export const AuthenticationService = ({ doDelete, doPost }) => {
  const doLogout = async () => {
    try {
      return await doDelete({ url: '/login' });
    } catch (error) {
      throw error;
    }
  };

  const doLogin = async (userCred) => {
    try {
      return await doPost({
        url: '/login',
        data: userCred,
      });
    } catch (error) {
      throw error;
    }
  };

  return {
    doLogout,
    doLogin,
  };
};
