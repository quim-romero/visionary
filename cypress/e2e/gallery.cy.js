describe("Gallery filtering", () => {
  beforeEach(() => {
    cy.visit("/gallery")
  })

  it("Should show all artworks by default", () => {
    cy.get("[data-cy=gallery-card]").should("have.length.greaterThan", 0)
  })

  it("Should filter artworks by 'Sci-Fi' category", () => {
    cy.contains("button", "Sci-Fi").click()
    cy.get("[data-cy=gallery-card]").each(($card) => {
      cy.wrap($card).contains("Sci-Fi")
    })
  })
})
