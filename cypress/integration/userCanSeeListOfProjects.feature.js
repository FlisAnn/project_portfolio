describe("User can see list of projects", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#projects-tab").click();
  });

  it("displays first project", () => {
    cy.get("#project-1").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "Address Book");
      cy.get(".description").should("contain", "In this project I used advanced Javascript concepts and ES6+ Features, persisting data using LocalStorage, testing with Cypress"); 
    });
  });

  it("displays second project", () => {
    cy.get("#project-2").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "ATM");
      cy.get(".description").should(
        "contain",
        "This project simulates an ATM where you can withdraw som $$$. It is written in Ruby and is tested with rspec."
      );
    });
  });

  it("displays third project", () => {
    cy.get("#project-3").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "FizzBuzz");
      cy.get(".description").should(
        "contain",
        "This project is written in Ruby and tested using rspec. FizzBuzz checks if a number is equal and or dividable by five"
      );
    });
  });

})
