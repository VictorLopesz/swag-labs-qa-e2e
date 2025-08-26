import Login from "./pages/login";
import Inventory from "./pages/inventory";

describe("Checkout", () => {

  beforeEach(() => {
    Login.visitarPagina();
  });

  it("CT-007: Checkout com sucesso", () => {
   Login.credencias("standard_user", "secret_sauce");
    Inventory.validarAcessoAPagina();

    cy.adicionarItem(
      "#item_4_title_link",
      "Sauce Labs Backpack",
      "#add-to-cart-sauce-labs-backpack",
      1
    );

    cy.contains(".header_secondary_container", "Your Cart").should(
      "be.visible"
    );

    cy.contains('[data-test="cart-list"]', "Sauce Labs Backpack").should(
      "be.visible"
    );

    cy.get('[data-test="checkout"]').click();

    cy.dadosCheckout("Victor", "Lopes", "23520-572");

    cy.finalizar();
  });

  it("CT-008: Checkout com campos obrigatórios vazios", () => {
   Login.credencias("standard_user", "secret_sauce");
    Inventory.validarAcessoAPagina();

    cy.adicionarItem(
      "#item_4_title_link",
      "Sauce Labs Backpack",
      "#add-to-cart-sauce-labs-backpack",
      1
    );

    cy.contains(".header_secondary_container", "Your Cart")
        .should("be.visible");

    cy.contains('[data-test="cart-list"]', "Sauce Labs Backpack")
        .should("be.visible");

    cy.get('[data-test="checkout"]').click();

    cy.contains('[class="header_secondary_container"]', "Checkout")
        .should("be.visible");

    cy.get('[data-test="continue"]').click();

    cy.contains('[data-test="error"]', "Error: First Name is required");
  });
});
