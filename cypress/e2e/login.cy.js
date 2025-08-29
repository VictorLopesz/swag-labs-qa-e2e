import Login from "./pages/login";
import Inventory from "./pages/inventory";
import Alert from "./pages/alert";
import users from "../fixtures/users.json";

const username = users.valid.username;
const blockedUser = users.blocked.username;
const password = users.valid.password;
const invalidPassword = users.invalid.password;

describe("Authentication / Login", () => {
  beforeEach(() => Login.goToLoginPage());

  context("Cenários com sucesso", () => {
    it("CT-001: Login com sucesso", () => {
      Login.loginWithCredentials(username, password);
      Inventory.verifyPageAccess();
    });

    it("CT-010: Logout com sucesso", () => {
      Login.loginWithCredentials(username, password);
      Inventory.accessSideMenu();
      Login.logout();
    });
  });

  context("Cenários com falha", () => {
    it("CT-002: Senha inválida", () => {
      Login.loginWithCredentials(username, invalidPassword);
      Alert.validateInvalidPassword();
    });

    it("CT-003: Usuário bloqueado", () => {
      Login.loginWithCredentials(blockedUser, password);
      Alert.validateLockedUser();
    });

    it("CT-004: Campos em branco", () => {
      Login.loginWithEmptyFields();
      Alert.validateEmptyFields();
    });
  });
});
