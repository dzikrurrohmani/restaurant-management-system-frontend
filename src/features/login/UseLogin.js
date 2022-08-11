import { Component, useState, useRef } from 'react';
import { useDeps } from '../../shared/api/DepsContext';
import LocalStorageHelper from '../../shared/api/LocalStorageHelper';
import {
  EMAIL_REGEX,
  USER_NAME_LABEL,
  USER_PASSWORD_LABEL,
} from '../../shared/constants';
import { WithLoading } from '../../shared/WithLoading';

const UseLogin = (props) => {
  const { authenticationService } = useDeps();
  const { onSetItemLocalStorage, onClearItemLocalStorage, onGetItemLocalStorage } = LocalStorageHelper('token');
  const [userCred, setUserCred] = useState({
    [USER_NAME_LABEL]: '',
    [USER_PASSWORD_LABEL]: '',
  });
  const [userCredValidity, setUserCredValidity] = useState({
    [USER_NAME_LABEL]: true,
    [USER_PASSWORD_LABEL]: true,
  });
  const [buttonOn, setButtonOn] = useState(false);
  console.log('login');

  const onLogin = async () => {
    props.onLoading(true);
    try {
      const response = await authenticationService.doLogin({
        [USER_NAME_LABEL]: userCred[USER_NAME_LABEL],
        [USER_PASSWORD_LABEL]: userCred[USER_PASSWORD_LABEL],
      });
      onSetItemLocalStorage(response.token);
      props.handleHeader(response.token)
      props.handleLog(true)
      window.alert('login success');
    } catch (error) {
      window.alert(error.message);
    } finally {
      props.onLoading(false);
    }
  };

  const onChange = (event) => {
    if (!buttonOn) {
      setButtonOn(true);
    }
    setUserCred({
      ...userCred,
      [event.target.name]: event.target.value,
    });
    validate(event.target.name, event.target.value);
    console.log(event.target.name, event.target.value);
  };

  const validate = (key, value) => {
    if (key === USER_NAME_LABEL) {
      console.log('cek email');
      if (value.match(EMAIL_REGEX)) {
        setUserCredValidity({
          ...userCredValidity,
          [USER_NAME_LABEL]: true,
        });
      } else {
        setUserCredValidity({
          ...userCredValidity,
          [USER_NAME_LABEL]: false,
        });
      }
    } else {
      console.log('cek password');
      if (value.length > 6) {
        setUserCredValidity({
          ...userCredValidity,
          [USER_PASSWORD_LABEL]: true,
        });
      } else {
        setUserCredValidity({
          ...userCredValidity,
          [USER_PASSWORD_LABEL]: false,
        });
      }
    }
  };

  const onLogout = async () => {
    props.onLoading(true);
    try {
      await authenticationService.doLogout({
        token: onGetItemLocalStorage(),
      });
      onClearItemLocalStorage();
      props.handleHeader('')
      props.handleLog(false)
      window.alert('logout success');
    } catch (error) {
      window.alert(error.message);
    } finally {
      props.onLoading(false);
    }
  };

  return {
    isAuthenticated,
    userCred,
    userCredValidity,
    buttonOn,
    onChange,
    onLogin,
    onLogout
  };
};

export default WithLoading(UseLogin);
