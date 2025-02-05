describe("Smoke test", () => {
  it("Responde 200 en /", () => {
    cy.request("/").its("status").should("eq", 200);
  });

  it("Basic visible landmarks", () => {
    cy.visit("/");
    cy.get("main").should("exist");
    cy.get("nav").should("exist");
    cy.get("footer").should("exist");
  });

  it("You can visit at least one internal route", () => {
    cy.visit("/");
    cy.get('a[href^="/"]').then(($as) => {
      const href = $as[0]?.getAttribute("href");
      if (href) {
        cy.visit(href);
        cy.location("pathname").should("eq", href);
        cy.get("main").should("exist");
      }
    });
  });
});
