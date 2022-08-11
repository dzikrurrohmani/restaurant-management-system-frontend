import { useState } from 'react';
import AppNavigationPage from './navigation/AppNavigationPage';
import AppNavigationView from './navigation/AppNavigationView';
import { ServiceFactory } from './services/ServiceFactory';
import { ApiClientFactory } from './shared/api/ApiClientFactory';
import { AxiosClient } from './shared/api/AxiosClient';
import { DepsProvider } from './shared/api/DepsContext';

const App = () => {
  const [header, setHeader] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJBcGlXbWJQb3MiLCJ1c2VybmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkB3bWIuY29tIn0.1BpkHjjNy307-QprKFfkY-p-aBgZILIdtA0r1zkJ5L8');

  const apiClient = ApiClientFactory(AxiosClient(header));
  const services = ServiceFactory(apiClient);
  return (
    <DepsProvider services={services}>
      <AppNavigationPage handleHeader={setHeader} render={AppNavigationView} />
    </DepsProvider>
  );
};

export default App;
