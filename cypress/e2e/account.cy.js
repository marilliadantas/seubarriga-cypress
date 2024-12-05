import { createAccount } from "../support/utils";
import HomePage from "../pages/homePage";
import AccountPage from "../pages/accountPage";

const homePage = new HomePage();
const accountPage = new AccountPage();

describe("Account Management", () => {
  beforeEach(() => {
    cy.login();
  });

  context("Account Creation, Edit and List", () => {
    afterEach(() => {
      accountPage.deleteAccount();
    });

    it("Create account", () => {
      const accountName = createAccount();

      homePage.accessAccounts("Adicionar");
      accountPage.createAccount(accountName);
      accountPage.verifyMessage("Conta adicionada com sucesso!");
    });

    it("Edit account", () => {
      homePage.accessAccounts("Adicionar");
      accountPage.createAccount("Nubank");
      accountPage.editAccount("Updated Account");
      accountPage.verifyMessage("Conta alterada com sucesso!");
    });

    it("List account", () => {
      cy.createAccount("Conta para listar");
      homePage.accessAccounts("Listar");
      accountPage.verifyList(1);
    });
  });

  context("Account Deletion", () => {
    it("Delete account", () => {
      homePage.accessAccounts("Adicionar");
      accountPage.createAccount("Account to delete");
      accountPage.deleteAccount();
      accountPage.verifyMessage("Conta removida com sucesso!");
    });
  });

  context("Account Validation", () => {
    it("Create account with empty name", () => {
      homePage.accessAccounts("Adicionar");
      accountPage.createAccount("");
      accountPage.verifyMessage("Informe o nome da conta");
    });
  });
});