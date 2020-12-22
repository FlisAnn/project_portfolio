describe("User can navigate the app", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("to About tab and it", () => {
    beforeEach(() => {
      cy.get("[data-cy='about-tab']").click();
    });

    it("displays About Me header", () => {
      cy.get("[data-cy='about-header']").should("contain", "About Me");
    });

    it("displays component name in url", () => {
      cy.url().should("contain", "about");
    });

    it("does not display My Projects header", () => {
      cy.get("[data-cy='projects-header']").should("not.exist");
    });

    it("does not display Hello World", () => {
      cy.get("[data-cy='hello']").should("not.exist");
    });
  });

  describe("to My Projects tab and it", () => {
    beforeEach(() => {
      cy.get("[data-cy='projects-tab']").click();
    });

    it("displays My Projects header", () => {
      cy.get("[data-cy='projects-header']").should("contain", "My Projects");
    });

    it("displays component name in url", () => {
      cy.url().should("contain", "projects");
    });

    it("does not display About Me header", () => {
      cy.get("[data-cy='about-header']").should("not.exist");
    });

    it("does not display Hello World", () => {
      cy.get("[data-cy='hello']").should("not.exist");
    });
  });
  
  describe("back to My Portfolio/Hello tab and it", () => {
    beforeEach(() => {
      cy.get("[data-cy='about-tab']").click();
      cy.get("[data-cy='header']").click();
    });

    it("displays Hello World", () => {
      cy.get("[data-cy='hello']").should("contain", "Hello World");
    });

    it("displays correct url", () => {
      cy.url().should("not.contain", "projects").and("not.contain", "about");
    });

    it("does not display About Me header", () => {
      cy.get("[data-cy='about-header']").should("not.exist");
    });

    it("does not display My Projects header", () => {
      cy.get("[data-cy='projects-header']").should("not.exist");
    });
  });
});
