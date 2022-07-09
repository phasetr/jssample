describe('ui: ItemsWithVariableHeight component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=itemswithvariableheight--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ItemsWithVariableHeight!');
    });
});
