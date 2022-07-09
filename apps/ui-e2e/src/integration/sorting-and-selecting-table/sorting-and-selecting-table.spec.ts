describe('ui: SortingAndSelectingTable component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=sortingandselectingtable--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to SortingAndSelectingTable!');
    });
});
