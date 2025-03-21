export const getEnvVariable = (key: string, fallback = '') => {
  return typeof process !== 'undefined' && process.env?.[key]
    ? String(process.env[key])
    : fallback;
};
