describe('ui: WithLeftMenu component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=withleftmenu--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to WithLeftMenu!');
    });
});
