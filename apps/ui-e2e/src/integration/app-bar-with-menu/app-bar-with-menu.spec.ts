describe('ui: AppBarWithMenu component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appbarwithmenu--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to AppBarWithMenu!');
    });
});
