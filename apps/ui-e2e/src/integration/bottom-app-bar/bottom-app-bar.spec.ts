describe('ui: BottomAppBar component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=bottomappbar--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to BottomAppBar!');
    });
});
