import Login from "./pages/login";
import Inventory from "./pages/inventory";

describe("Carrinho", () => {
  beforeEach(() => {
    Login.visitarPagina();
  });

  it("CT-005: Adicionar produto ao carrinho", () => {
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
  });

  it("CT-006: Remover produto do carrinho", () => {
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

    cy.get('[data-test="remove-sauce-labs-backpack"]').click();

    cy.contains(".shopping_cart_badge", 1).should("not.exist");
  });
});
