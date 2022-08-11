import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LocalStorageHelper from './LocalStorageHelper';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const { onSetItemLocalStorage, onClearItemLocalStorage } =
    LocalStorageHelper('userCred');
  const onLogin = (userCred) => {
    onSetItemLocalStorage(userCred);
    setUser(userCred);
    navigate('/home', { replace: true });
  };
  const onLogout = () => {
    onClearItemLocalStorage();
    setUser(null);
    navigate('/', { replace: true });
  };
  return (
    <AuthContext.Provider value={{ user, onLogin, onLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
