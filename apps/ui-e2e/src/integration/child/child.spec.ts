describe('ui: Child component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=child--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Child!');
    });
});
