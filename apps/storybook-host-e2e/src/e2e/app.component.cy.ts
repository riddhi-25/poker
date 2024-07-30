describe('storybook-host', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('planning-poker-app-root').should('exist');
  });
});
