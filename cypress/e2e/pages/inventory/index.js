class Inventory {

  validarAcessoAPagina() {
    cy.url().should("include", "inventory.html");
  }

  menuLateral() {
    cy.contains("button", "Open Menu").click();

    cy.contains('[data-test="inventory-sidebar-link"]', "All Items").should(
      "be.visible"
    );

  }
}

export default new Inventory();
