describe("Produtos", () => {
  beforeEach(() => {
    cy.paginaInicial();
  });

  it("CT-009: Ordenar produtos por preço (low to high)", () => {
    cy.login('standard_user', 'secret_sauce');

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
