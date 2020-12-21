describe('Portfolio interface', () => {
  it('successfully renders', () => {
    cy.visit("/");
    getByAltText.get("[data-cy='header']").should("contain", "My Portfolio")
    getByAltText.get("[data-cy='footer']").should("contain", "Made with React 17.0.1")
  });
})
