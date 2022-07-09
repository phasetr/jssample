describe('ui: BasicGrid component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=basicgrid--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to BasicGrid!');
    });
});
