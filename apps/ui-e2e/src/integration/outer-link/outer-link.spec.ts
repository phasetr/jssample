describe('ui: OuterLink component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=outerlink--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to OuterLink!');
    });
});
