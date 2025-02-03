describe("A11y audit (axe)", () => {
  const pages = ["/", "/gallery", "/contact"];

  pages.forEach((path) => {
    it(`no critical violations in ${path}`, () => {
      cy.visit(path);
      cy.injectAxe();
      cy.checkA11y(null, {
        includedImpacts: ["critical", "serious"],
      });
    });
  });
});
