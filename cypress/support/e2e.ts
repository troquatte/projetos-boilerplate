Cypress.on('uncaught:exception', (err) => {
  console.error('Exceção não tratada: ', err);
  return false;
});
