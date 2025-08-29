import Login from "./pages/login";
import Inventory from "./pages/inventory";
import users from "../fixtures/users.json";
import { elements as el } from "./pages/login/elements";

const username = users.valid.username;
const password = users.valid.password;

describe("Produtos", () => {
  beforeEach(() => {
    Login.goToLoginPage();
    Login.loginWithCredentials(username, password);
    Inventory.verifyPageAccess();
  });

  it("CT-009: Ordenar produtos por preço (low to high)", () => {
    cy.get(el.productSort)
      .select("lohi");

    cy.get(el.productSort)
      .should("have.value", "lohi");

    const paraNumero = (texto) => Number(texto.replace("$", ""));

    cy.get(".inventory_item_price")
      .then(($elementos) => {
        const precos = [...$elementos]
          .map((el) => paraNumero(el.innerText));

      const precosOrdenados = [...precos]
        .sort((a, b) => a - b);
        expect(precos).to.deep.equal(precosOrdenados);
    });
  });
});
