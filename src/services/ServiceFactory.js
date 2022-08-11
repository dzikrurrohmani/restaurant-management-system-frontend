import { AuthenticationService } from './AuthService';
import {MenuService} from './MenuService';
import {TableService} from './TableService';

export const ServiceFactory = (apiClient) => {
  return {
    authenticationService: AuthenticationService(apiClient),
    menuService: MenuService(apiClient),
    tableService: TableService(apiClient),
  };
};
