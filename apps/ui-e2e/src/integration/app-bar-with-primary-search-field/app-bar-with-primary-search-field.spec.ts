describe('ui: AppBarWithPrimarySearchField component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appbarwithprimarysearchfield--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to AppBarWithPrimarySearchField!');
    });
});
