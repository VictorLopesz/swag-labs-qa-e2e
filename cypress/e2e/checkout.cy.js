import Login from "./pages/login";
import Inventory from "./pages/inventory";
import users from "../fixtures/users.json";
import items from '../fixtures/items.json';
import actions from '../fixtures/actions.json';
import swagLabsPages from './pages/swagLabsPages';

const username = users.valid.username;
const password = users.valid.password;
const backpack = items.itemSouceLabsBackpack;

describe("Checkout", () => {
  beforeEach(() => {
    Login.goToLoginPage();
    Login.loginWithCredentials(username, password);
    Inventory.verifyPageAccess();
  });

  it("CT-007: Checkout com sucesso", () => {
    cy.addItem(
      backpack.idItem,
      backpack.nameItem,
      actions.addToCard,
      1
    );
    
    swagLabsPages.goToCartPage()

    cy.contains('[data-test="cart-list"]', backpack.nameItem)
      .should("be.visible");

    cy.get('[data-test="checkout"]').click();

    swagLabsPages.goToCheckoutStepOne()

    cy.dataCheckout(
      "Victor",
      "Lopes",
      "23520-572"
    );

    cy.finish();
  });

  it("CT-008: Checkout com campos obrigatórios vazios", () => {
    cy.addItem(
      backpack.idItem,
      backpack.nameItem,
      actions.addToCard,
      1
    );

    swagLabsPages.goToCartPage()

    cy.get('[data-test="checkout"]')
      .click();  
    
    swagLabsPages.goToCheckoutStepOne()
    
    cy.get('[data-test="continue"]')
      .click();
    
    cy.contains('[data-test="error"]', "Error: First Name is required");
  });
});
