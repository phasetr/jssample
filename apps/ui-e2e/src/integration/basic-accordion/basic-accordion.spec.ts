describe('ui: BasicAccordion component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=basicaccordion--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to BasicAccordion!');
    });
});
