describe("Smoke", () => {
  it("loads home and can navigate", () => {
    cy.visit("/");
    cy.contains("Curated Digital Works");
    cy.get('nav[aria-label="Main navigation"]').should("exist");

    cy.contains("Gallery").click();
    cy.url().should("include", "/gallery");
    cy.get("[data-cy=gallery-card]").its("length").should("be.greaterThan", 0);

    cy.contains("Contact").click();
    cy.url().should("include", "/contact");
    cy.get('form[aria-label="Contact form"]').should("exist");
  });
});
