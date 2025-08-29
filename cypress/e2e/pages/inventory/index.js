class Inventory {

  verifyPageAccess() {
    cy.url().should("include", "inventory.html");
  }

  accessSideMenu() {
    cy.contains("button", "Open Menu").click();

    cy.contains('[data-test="inventory-sidebar-link"]', "All Items").should(
      "be.visible"
    );

  }
}

export default new Inventory();
