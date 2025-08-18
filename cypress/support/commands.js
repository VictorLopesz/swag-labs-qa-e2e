// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("paginaInicial", () => {
  cy.visit("https://www.saucedemo.com/");

  cy.contains(".login_logo", "Swag Labs");
});

Cypress.Commands.add("login", (usuario, senha) => {
  cy.get("#user-name").type(usuario);
  cy.get("#password").type(senha);

  cy.get("#login-button").click();
  cy.contains(".title", "Products")
    .should("be.visible");
});

  Cypress.Commands.add('adicionarItem', (id, nomeItem, adicionar, quantidade) => {
    cy.contains(id, nomeItem)
      .should("be.visible");
    cy.get(adicionar).click();
    cy.contains(".shopping_cart_badge", quantidade);
    cy.get(".shopping_cart_badge").click();
  })

Cypress.Commands.add('dadosCheckout', (nome, sobrenome, cep) => {
    cy.contains('[class="header_secondary_container"]', 'Checkout')
      .should('be.visible')

    cy.get('[data-test="firstName"]').type(nome)
    cy.get('[data-test="lastName"]').type(sobrenome)
    cy.get('[data-test="postalCode"]').type(cep)

    cy.get('[data-test="continue"]').click()
})

Cypress.Commands.add('finalizar', () => {
    cy.contains('[data-test="title"]', 'Checkout: Overview')
      .should('be.visible')

    cy.contains('[data-test="total-info-label"]', 'Price Total')
      .should('be.visible')
    
    cy.contains('button', 'Finish').click();

    cy.contains('h2', 'Thank you for your order!')
      .should('be.visible')
})