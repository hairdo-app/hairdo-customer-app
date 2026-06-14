const path = require('path');
const dotenv = require('dotenv');

const APP_ENV = process.env.APP_ENV || process.env.NODE_ENV || 'local';
const envFile = path.resolve(__dirname, APP_ENV === 'local' ? '.env' : `.env.${APP_ENV}`);

dotenv.config({ path: envFile });

const appJson = require('./app.json');

module.exports = {
  expo: {
    ...appJson.expo,
    extra: {
      APP_ENV,
      API_BASE_URL: process.env.API_BASE_URL || '',
      ANALYTICS_KEY: process.env.ANALYTICS_KEY || '',
      IS_API_MOCKED: process.env.IS_API_MOCKED === 'true' ? 'true' : 'false',
    },
  },
};
