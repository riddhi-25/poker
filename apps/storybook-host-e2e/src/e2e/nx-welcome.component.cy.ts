describe('storybook-host', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxwelcomecomponent--primary'));
  it('should render the component', () => {
    cy.get('planning-poker-app-nx-welcome').should('exist');
  });
});
