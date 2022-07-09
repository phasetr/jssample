describe('ui: LeftMenu component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=leftmenu--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to LeftMenu!');
    });
});
