import Login from "./pages/login";
import Inventory from "./pages/inventory";

describe("Produtos", () => {
  beforeEach(() => {
    Login.visitarLoginPage();
    Login.credencias("standard_user", "secret_sauce");

  });

  it("CT-009: Ordenar produtos por preço (low to high)", () => {
    Inventory.validarAcessoAPagina();
    
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
