class Alert {
  
    validateInvalidPassword() {
    cy.contains(
      "h3",
      "Epic sadface: Username and password do not match any user in this service"
    ).should("be.visible");
  }

  validateLockedUser() {
    cy.contains(
      "h3",
      "Epic sadface: Sorry, this user has been locked out."
    ).should("be.visible");
  }

  validateEmptyFields(){
    cy.contains("h3", "Epic sadface: Username is required")
      .should("be.visible");
  }
}

export default new Alert();
