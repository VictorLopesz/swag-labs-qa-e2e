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

  Cypress.Commands.add('addItem', (id, nameItem, add, quantity) => {
    cy.contains(id, nameItem)
      .should("be.visible");
    cy.get(add).click();
    cy.contains(".shopping_cart_badge", quantity);
    cy.get(".shopping_cart_badge").click();
  })

Cypress.Commands.add('dataCheckout', (name, lastName, zipCode) => {
    cy.get('[data-test="firstName"]').type(name)
    cy.get('[data-test="lastName"]').type(lastName)
    cy.get('[data-test="postalCode"]').type(zipCode)

    cy.get('[data-test="continue"]').click()
})

Cypress.Commands.add('finish', () => {
    cy.contains('[data-test="title"]', 'Checkout: Overview')
      .should('be.visible')

    cy.contains('[data-test="total-info-label"]', 'Price Total')
      .should('be.visible')
    
    cy.contains('button', 'Finish').click();

    cy.contains('h2', 'Thank you for your order!')
      .should('be.visible')
})