import { getEnvVariable } from '../helpers/get-env-variables.helper';

export const environment = {
  env: 'staging',
  firebase: {
    apiKey: '#VALOR_DA_VARIAVEL',
    authDomain: '#VALOR_DA_VARIAVEL',
    projectId: '#VALOR_DA_VARIAVEL',
    storageBucket: '#VALOR_DA_VARIAVEL',
    messagingSenderId: '#VALOR_DA_VARIAVEL',
    appId: '#VALOR_DA_VARIAVEL',
    measurementId: '#VALOR_DA_VARIAVEL',
  },
  cert: {
    projectId: getEnvVariable('CERT_PROJECT_ID', 'default'),
    privateKey: getEnvVariable('CERT_PRIVATE_KEY', 'default'),
    clientEmail: getEnvVariable('CERT_CLIENT_EMAIL', 'default'),
  },
};
