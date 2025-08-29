class swagLabsPages {
  goToCartPage() {
    cy.contains(".header_secondary_container", "Your Cart")
      .should("be.visible");
    
    cy.url().should("include", "/cart.html");
  }

  goToCheckoutStepOne(){
    cy.contains('[class="header_secondary_container"]', 'Checkout: Your Information')
      .should('be.visible')
    
    cy.url().should("include", "/checkout-step-one.html");

  }
}

export default new swagLabsPages();