export const environment = {
  env: String(process.env['ENV']),
  firebase: {
    apiKey: String(process.env['API_KEY']),
    authDomain: String(process.env['AUTH_DOMAIN']),
    projectId: String(process.env['PROJECT_ID']),
    storageBucket: String(process.env['STORAGE_BUCKET']),
    messagingSenderId: String(process.env['MESSAGING_SENDER_ID']),
    appId: String(process.env['APP_ID']),
    measurementId: String(process.env['MEASUREMENT_ID']),
  },
  cert: {
    projectId: String(process.env['CERT_PROJECT_ID']),
    privateKey: String(process.env['CERT_PRIVATE_KEY']),
    clientEmail: String(process.env['CERT_CLIENT_EMAIL']),
  },
};
