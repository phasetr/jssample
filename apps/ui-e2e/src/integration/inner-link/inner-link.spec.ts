describe('ui: InnerLink component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=innerlink--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to InnerLink!');
    });
});
