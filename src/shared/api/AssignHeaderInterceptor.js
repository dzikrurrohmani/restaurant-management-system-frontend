export function AssignHeaderInterceptor(token) {
    const authHeaderInterceptor = (config) => {
      console.log('AssignHeaderInterceptor', token);
      if (config.url !== '/login') {
        config.headers.Authorization = token;
      }
      return config;
    };
  
    return {
      authHeaderInterceptor,
    };
  }
  