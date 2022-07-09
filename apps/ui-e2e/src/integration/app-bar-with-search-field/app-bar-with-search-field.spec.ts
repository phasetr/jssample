describe('ui: AppBarWithSearchField component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appbarwithsearchfield--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to AppBarWithSearchField!');
    });
});
