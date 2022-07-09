describe('ui: CustomizationSample component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=customizationsample--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to CustomizationSample!');
    });
});
