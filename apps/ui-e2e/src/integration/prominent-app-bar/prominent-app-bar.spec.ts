describe('ui: ProminentAppBar component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=prominentappbar--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ProminentAppBar!');
    });
});
