import { useState } from 'react';
import AppNavigationPage from './navigation/AppNavigationPage';
import AppNavigationView from './navigation/AppNavigationView';
import { ServiceFactory } from './services/ServiceFactory';
import { ApiClientFactory } from './shared/api/ApiClientFactory';
import { AxiosClient } from './shared/api/AxiosClient';
import { DepsProvider } from './shared/api/DepsContext';

const App = () => {
  const [header, setHeader] = useState('');

  const apiClient = ApiClientFactory(AxiosClient(header));
  const services = ServiceFactory(apiClient);
  return (
    <DepsProvider services={services}>
      <AppNavigationPage handleHeader={setHeader} render={AppNavigationView} />
    </DepsProvider>
  );
};

export default App;
