
describe('User can navigate the app', () => {
  beforeEach(() => {
    cy.visit("/")
  })

  describe('to About tab and it', () => {
    beforeEach(() => {
      cy.get("[data-cy='about-tab']").click()
    });
    
    it('displays About Me header', () => {
      cy.get("[data-cy='about-header']").should("contain", "About Me");
    });
    
    it('displays component name in url', () => {
      cy.url().should("contain", "about")
    });

    it('does not display My Projects header', () => {
      cy.get("[data-cy='projects-header']").should("not.exist")
    });

    it('does not display Resume', () => {
      cy.get("[data-cy='resume']").should("not.exist")
    });
  })
  
  describe('to My Projects tab and it', () => {
    beforeEach(() => {
      cy.get("[data-cy='projects-tab']").click()
    });

    it('displays My Projects header', () => {
      cy.get("[data-cy='projects-header']").should("contain", "My Projects")
    });
    
    it('displays component name in url', () => {
      cy.url().should("contain", "projects")
    });

    it('does not display About Me header', () => {
      cy.get("[data-cy='about-header']").should("not.exist")
    });

    it('does not display Resume', () => {
      cy.get("[data-cy='resume']").should("not.exist")
    });

    describe('back to My Portfolio/Resume tab and it', () => {
      beforeEach(() => {
        cy.get("[data-cy='about-tab']").click()
        cy.get("[data-cy='header']").click()
      });

      it('displays My Resume', () => {
        cy.get("[data-cy='my-resume']").should("contain", "My Resume")
      });
      
      it('displays correct url', () => {
        cy.url()
        .should("not.contain", "projects")
        .and("not.contain", "about")
      });

      it('does not display About Me header', () => {
        cy.get("[data-cy='about-header']").should("not.exist")
      });
      
      it('does not display My Projects header', () => {
        cy.get("[data-cy='projects-header']").should("not.exist")
      });
    })
  })
})