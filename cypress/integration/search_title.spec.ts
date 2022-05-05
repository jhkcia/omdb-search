describe('Search A Query', () => {
    it('Displays the result in the list', () => {
      cy.visit('http://localhost:3000');
  
      cy.get('[data-testid="queryText"]')
        .type('Gof Father');
  
      cy.get('[data-testid="searchButton"]')
        .click();
  
      cy.contains('My God! Father');
    });
  });