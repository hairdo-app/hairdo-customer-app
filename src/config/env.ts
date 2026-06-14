import Constants from 'expo-constants';

const extra = (Constants.expoConfig || Constants.manifest)?.extra ?? {};

export const env = {
  APP_ENV: String(extra.APP_ENV ?? 'local'),
  API_BASE_URL: String(extra.API_BASE_URL ?? ''),
  ANALYTICS_KEY: String(extra.ANALYTICS_KEY ?? ''),
  IS_API_MOCKED: String(extra.IS_API_MOCKED ?? 'false') === 'true',
};
