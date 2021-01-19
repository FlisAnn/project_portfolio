describe("User can navigate the app", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("to Resume tab and it", () => {
    beforeEach(() => {
      cy.get("[data-cy='resume-tab']").click();
    });

    it("displays Resume header", () => {
      cy.get("[data-cy='resume-header']").should("contain", "My Resume");
    });

    it("displays component name in url", () => {
      cy.url().should("contain", "resume");
    });

    it("does not display My Projects header", () => {
      cy.get("[data-cy='projects-header']").should("not.exist");
    });

    it("does not display Welcome", () => {
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

    it("does not display Resume header", () => {
      cy.get("[data-cy='resume-header']").should("not.exist");
    });

    it("does not display Welcome", () => {
      cy.get("[data-cy='hello']").should("not.exist");
    });
  });
  
  describe("back to Home/Hello tab and it", () => {
    beforeEach(() => {
      cy.get("[data-cy='resume-tab']").click();
      cy.get("[data-cy='header']").click();
    });

    it("displays Welcome", () => {
      cy.get("[data-cy='hello']").should("contain", "Welcome");
    });

    it("displays correct url", () => {
      cy.url().should("not.contain", "projects").and("not.contain", "resume");
    });

    it("does not display Resume header", () => {
      cy.get("[data-cy='resume-header']").should("not.exist");
    });

    it("does not display My Projects header", () => {
      cy.get("[data-cy='projects-header']").should("not.exist");
    });
  });
});
