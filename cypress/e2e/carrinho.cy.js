import Login from "./pages/login";
import Inventory from "./pages/inventory";
import users from "../fixtures/users.json";
import items from '../fixtures/items.json';
import swagLabsPages from './pages/swagLabsPages';
import actions from '../fixtures/actions.json';

const backpack = items.itemSouceLabsBackpack;

describe("Carrinho", () => {

  beforeEach(() => {
    Login.goToLoginPage();
    Login.loginWithCredentials(
      users.valid.username,
      users.valid.password
    );
    Inventory.verifyPageAccess();
  });

  it("CT-005: Adicionar produto ao carrinho", () => {
    cy.addItem(
      backpack.idItem,
      backpack.nameItem,
      actions.addToCard,
      1
    );

    swagLabsPages.goToCartPage()
  
    cy.contains('[data-test="cart-list"]', "Sauce Labs Backpack")
      .should("be.visible");
  });

  it("CT-006: Remover produto do carrinho", () => {
    cy.addItem(
      backpack.idItem,
      backpack.nameItem,
      actions.addToCard,
      1
    );

    swagLabsPages.goToCartPage()

    cy.contains('[data-test="cart-list"]', "Sauce Labs Backpack")
      .should("be.visible");

    cy.get('[data-test="remove-sauce-labs-backpack"]')
      .click();

    cy.contains(".shopping_cart_badge", 1)
      .should("not.exist");
  });
});
