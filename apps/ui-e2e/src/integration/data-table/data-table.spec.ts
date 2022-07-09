describe('ui: DataTable component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=datatable--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to DataTable!');
    });
});
