describe('Portfolio interface', () => {
  it('successfully renders', () => {
    cy.visit("/");
    cy.get("[data-cy='header']").should("contain", "My Portfolio")
    cy.get("[data-cy='footer']").should("contain", "Made with React 17.0.1")
  });
})
