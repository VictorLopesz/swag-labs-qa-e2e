import Login from "./pages/login";
import Inventory from "./pages/inventory";
import Mensagens from './pages/mensagens/';


describe("Login", () => {
  beforeEach(() => {
    Login.visitarPagina();
  });

  it("CT-001: Login com sucesso", () => {
    Login.credencias("standard_user", "secret_sauce");
    Inventory.validarAcessoAPagina();
  });

  it("CT-002: Login com senha inválida", () => {
    Login.credencias("standard_user", "123");
    Mensagens.senhaInvalida()
  
  });

  it("CT-003: Login com usuário bloqueado", () => {
    Login.credencias("locked_out_user", "secret_sauce");
    Mensagens.usuarioBloqueado()

  });

  it("CT-004: Login com campos em branco", () => {
    cy.get("#login-button").click();
    Mensagens.camposEmBranco()
  });

  it("CT-010: Logout com sucesso", () => {
    Login.credencias("standard_user", "secret_sauce");
    Inventory.menuLateral();
    Login.logout();

  });
});
