/* global Cypress, cy */
import '@testing-library/cypress/add-commands'
import "cypress-axe";

Cypress.Commands.add("prepareA11y", () => {
  cy.injectAxe();
  cy.configureAxe({
    rules: [],
  });
});
