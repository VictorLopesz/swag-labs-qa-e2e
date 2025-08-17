describe("Login", () => {
  beforeEach(() => {
    cy.paginaInicial();
  });


  it("CT-001: Login com sucesso", () => {   
    cy.login('standard_user', 'secret_sauce');
  });

  it("CT-002: Login com senha inválida", () => {
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("123");
    cy.get("#login-button").click();

    cy.contains("h3", "Epic sadface: Username and password do not match any user in this service")
        .should("be.visible");
  });

  it("CT-003: Login com usuário bloqueado", () => {
    cy.get("#user-name").type("locked_out_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();

    cy.contains("h3", "Epic sadface: Sorry, this user has been locked out.")
        .should("be.visible");
  });

  it("CT-004: Login com campos em branco", () => {
    cy.get("#login-button").click();

    cy.contains("h3", "Epic sadface: Username is required")
        .should("be.visible");
  });
});
