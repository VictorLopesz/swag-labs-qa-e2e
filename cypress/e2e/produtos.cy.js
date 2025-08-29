import Login from "./pages/login";
import Inventory from "./pages/inventory";
import users from "../fixtures/users.json";

describe("Produtos", () => {
  beforeEach(() => {
    Login.goToLoginPage();
    Login.loginWithCredentials(users.valid.username, users.valid.password);
    Inventory.verifyPageAccess();
  });

  it("CT-009: Ordenar produtos por preço (low to high)", () => {
    
    cy.get('[data-test="product-sort-container"]')
      .select('lohi')
    
    cy.get('[data-test="product-sort-container"]')
      .should('have.value', 'lohi')
    
    const paraNumero = (texto) => Number(texto.replace('$', ''))

    cy.get('.inventory_item_price')
      .then($elementos => {
        const precos = [...$elementos]
            .map(el => paraNumero(el.innerText))
        
        const precosOrdenados = [...precos]
            .sort((a, b) => a - b)
        expect(precos).to.deep.equal(precosOrdenados)
      })
})
});
