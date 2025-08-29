import Login from "./pages/login";
import Inventory from "./pages/inventory";
import users from "../fixtures/users.json";

describe("Carrinho", () => {

  beforeEach(() => {
    Login.goToLoginPage();
    Login.loginWithCredentials(users.valid.username, users.valid.password);
    Inventory.verifyPageAccess();
  });

  it("CT-005: Adicionar produto ao carrinho", () => {
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
  });

  it("CT-006: Remover produto do carrinho", () => {
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

    cy.get('[data-test="remove-sauce-labs-backpack"]').click();

    cy.contains(".shopping_cart_badge", 1)
      .should("not.exist");
  });
});
