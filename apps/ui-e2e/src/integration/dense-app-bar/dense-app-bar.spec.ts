describe('ui: DenseAppBar component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=denseappbar--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to DenseAppBar!');
    });
});
