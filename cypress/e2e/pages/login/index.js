import { elements as el } from "./elements";

class Login {
  goToLoginPage() {
    cy.visit("https://www.saucedemo.com/");
    cy.url()
      .should("include", "/");
  }

  loginWithCredentials(user, password) {
    cy.get(el.user).type(user);
    cy.get(el.password).type(password);
    cy.get(el.loginBtn).click();
  }

  logout() {
    cy.contains(el.logout, "Logout").click();
    cy.get(el.user)
      .should("be.visible");

    cy.url()
      .should("include", "/");
  }

  loginWithEmptyFields() {
    cy.get(el.user)
      .should('have.value', '')
    cy.get(el.password)
      .should('have.value', '')
    cy.get(el.loginBtn)
      .click();
  }
}

export default new Login();
