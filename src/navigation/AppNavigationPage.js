import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LocalStorageHelper from '../shared/api/LocalStorageHelper';

const AppNavigationPage = (props) => {
  const navigate = useNavigate();
  console.log('AppNavPage');
  const [isActive, setIsActive] = useState(false);
  const handleLog = (state = false) => {
    if (state) {
      setIsActive(state);
      navigate('/home', { replace: true });
    } else {
      setIsActive(false);
      navigate('/', { replace: true });
      props.handleHeader('');
      window.alert('logout success');
      LocalStorageHelper().onClearItemLocalStorage();
    }
  };
  return props.render({
    isActive: isActive,
    handleLog: handleLog,
    handleHeader: props.handleHeader,
  });
};

export default AppNavigationPage;
