describe("Carrinho", () => {
  beforeEach(() => {
    cy.paginaInicial();
  });

  it("CT-005: Adicionar produto ao carrinho", () => {
    cy.login("standard_user", "secret_sauce")

    cy.contains('#item_4_title_link', 'Sauce Labs Backpack')
      .should('be.visible')

    cy.get('#add-to-cart-sauce-labs-backpack')
      .click()

    cy.contains('.shopping_cart_badge', 1)

    cy.get('.shopping_cart_badge').click()
  
    cy.contains('.header_secondary_container', 'Your Cart')
      .should('be.visible')

    cy.contains('[data-test="cart-list"]', 'Sauce Labs Backpack')
      .should('be.visible')
});

it("CT-006: Remover produto do carrinho", () => {

    cy.login("standard_user", "secret_sauce")
    
    cy.contains('#item_4_title_link', 'Sauce Labs Backpack')
        .should('be.visible')
    
    cy.get('#add-to-cart-sauce-labs-backpack')
        .click()
    
    cy.contains('.shopping_cart_badge', 1)
    
    cy.get('.shopping_cart_badge').click()
    
    cy.contains('.header_secondary_container', 'Your Cart')
        .should('be.visible')
    
    cy.contains('[data-test="cart-list"]', 'Sauce Labs Backpack')
        .should('be.visible')
    
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()    
    
    cy.contains('.shopping_cart_badge', 1)
        .should('not.exist')
});
})
