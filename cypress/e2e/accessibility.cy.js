describe("Accessibility", () => {
  it("Navbar has proper ARIA roles", () => {
    cy.visit("/")
    cy.get("nav[aria-label='Main navigation']").should("exist")
    cy.get("button[aria-label='Toggle theme']").should("exist")
  })
})
