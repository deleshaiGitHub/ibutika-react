const environments = {
  development: {
    apiBaseUrl: 'http://localhost:5000/api',
    imageBaseUrl: 'http://localhost:5000/images',
    websocketUrl: 'ws://localhost:5000',
    environment: 'development'
  },
  production: {
    // We'll update these with your DigitalOcean droplet IP
    apiBaseUrl: 'http://YOUR_DROPLET_IP/api',
    imageBaseUrl: 'http://YOUR_DROPLET_IP/images',
    websocketUrl: 'ws://YOUR_DROPLET_IP',
    environment: 'production'
  }
};

const getEnvironmentConfig = () => {
  const env = import.meta.env.VITE_APP_ENV || 'development';
  return environments[env] || environments.development;
};

export default getEnvironmentConfig();