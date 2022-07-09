describe('ui: Parent component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=parent--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Parent!');
    });
});
