describe('Example Test', () => {
  it('Should visit example.com and check the heading', () => {
    // Visita o site de exemplo
    cy.visit('https://example.com');

    // Verifica se o título da página está correto
    cy.title().should('include', 'Example Domain');

    // Verifica se o cabeçalho da página está correto
    cy.get('h1').should('have.text', 'Example Domain');
  });
});

describe('The Internet Test', () => {
  it('Should visit The Internet and check a specific page', () => {
    // Visita o site The Internet
    cy.visit('https://the-internet.herokuapp.com');
    cy.wait(2000);    // Clica no link "Add/Remove Elements"
    cy.contains('Add/Remove Elements').click();

    // Adiciona um novo elemento
    cy.get('button').contains('Add Element').click();
    cy.get('button').contains('Add Element').click();
    cy.get('button').contains('Add Element').click();
    cy.get('button').contains('Add Element').click();
    cy.get('button').contains('Add Element').click();
    cy.get('button').contains('Add Element').click();

    cy.wait(2000);
    // Verifica se o novo elemento foi adicionado
    cy.get('button').should('have.length', 7);
  });
});
