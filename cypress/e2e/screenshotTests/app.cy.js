describe('splash', () => {
  const scenario = () => {
    cy.visit('/');
    cy.matchImageSnapshot();
  };
  it('home page should load - desktop', () => {
    cy.viewport('macbook-13');
    scenario();
  });

  it('home page should load - mobile', () => {
    cy.viewport('iphone-x');
    scenario();
  });
});
