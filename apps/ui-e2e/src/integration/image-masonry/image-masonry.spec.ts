describe('ui: ImageMasonry component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=imagemasonry--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ImageMasonry!');
    });
});
