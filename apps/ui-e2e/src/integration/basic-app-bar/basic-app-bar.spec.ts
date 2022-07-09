describe('ui: BasicAppBar component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=basicappbar--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to BasicAppBar!');
    });
});
