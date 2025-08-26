import { elements as el } from "./elements";

class Login {
  visitarPagina() {
    cy.visit("https://www.saucedemo.com/");
    cy.url().should("include", "/");
  }

  credencias(usuario, senha) {
    cy.get(el.usuario).type(usuario);
    cy.get(el.senha).type(senha);
    cy.get(el.botaoLogin).click();
  }

  logout() {
    cy.contains('[data-test="logout-sidebar-link"]', "Logout").click();
    cy.get('[data-test="username"]').should("be.visible");
    cy.url().should("include", "/");
  }
}

export default new Login();
