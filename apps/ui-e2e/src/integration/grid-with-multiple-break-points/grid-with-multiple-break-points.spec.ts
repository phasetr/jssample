describe('ui: GridWithMultipleBreakPoints component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=gridwithmultiplebreakpoints--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to GridWithMultipleBreakPoints!');
    });
});
