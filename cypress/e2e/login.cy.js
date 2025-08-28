import Login from "./pages/login";
import Inventory from "./pages/inventory";
import Alert from "./pages/alert";
import users from "../fixtures/users.json";

describe("Login", () => {
  beforeEach(() => Login.visitarLoginPage());

  context("Cenários com sucesso", () => {
    it("CT-001: Login com sucesso", () => {
      Login.credencias(users.valid.username, users.valid.password);
      Inventory.validarAcessoAPagina();
    });

    it("CT-010: Logout com sucesso", () => {
      Login.credencias(users.valid.username, users.valid.password);
      Inventory.menuLateral();
      Login.logout();
    });
  });

  context("Cenários com falha", () => {
    it("CT-002: Senha inválida", () => {
      Login.credencias(users.invalid.username, users.invalid.password);
      Alert.senhaInvalida();
    });

    it("CT-003: Usuário bloqueado", () => {
      Login.credencias(users.blocked.username, users.blocked.password);
      Alert.usuarioBloqueado();
    });

    it("CT-004: Campos em branco", () => {
      Login.credenciaisVazias();
      Alert.camposEmBranco();
    });
  });
});
