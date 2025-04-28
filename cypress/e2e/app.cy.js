import { terminalLog } from '../support/utils/utils';

describe('splash', () => {
  it('home page should load', () => {
    cy.visit('/');

    cy.get('h1').should('be.visible');

    cy.injectAxe();
    cy.configureAxe({
      rules: [{ id: 'color-contrast', enabled: false }],
    });
    cy.checkA11y(null, null, terminalLog);
  });
});
