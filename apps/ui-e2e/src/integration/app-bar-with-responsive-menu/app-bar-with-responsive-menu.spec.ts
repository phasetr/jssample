describe('ui: AppBarWithResponsiveMenu component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appbarwithresponsivemenu--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to AppBarWithResponsiveMenu!');
    });
});
