describe('ui: DefaultBreakPointsTable component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=defaultbreakpointstable--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to DefaultBreakPointsTable!');
    });
});
