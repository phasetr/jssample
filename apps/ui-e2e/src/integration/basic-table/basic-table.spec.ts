describe('ui: BasicTable component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=basictable--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to BasicTable!');
    });
});
