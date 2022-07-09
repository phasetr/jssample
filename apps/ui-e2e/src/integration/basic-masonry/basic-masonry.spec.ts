describe('ui: BasicMasonry component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=basicmasonry--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to BasicMasonry!');
    });
});
