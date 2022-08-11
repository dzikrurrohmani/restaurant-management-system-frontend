const LocalStorageHelper = (key, defVal = '') => {
  const onSetItemLocalStorage = (value) => {
    if (value) {
      window.localStorage.setItem(key, value);
    } else {
      window.localStorage.setItem(key, defVal);
    }
  };

  const onGetItemLocalStorage = () => {
    return window.localStorage.getItem(key);
  };

  const onClearItemLocalStorage = () => window.localStorage.clear();
  return {
    onSetItemLocalStorage,
    onGetItemLocalStorage,
    onClearItemLocalStorage,
  };
};

export default LocalStorageHelper;
