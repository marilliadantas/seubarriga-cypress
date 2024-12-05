import { createAccount } from '../support/utils';
import DashboardPage from '../pages/dashboardPage';
import AccountPage from '../pages/accountPage';

const dashboardPage = new DashboardPage();
const accountPage = new AccountPage();

describe('Account Management', () => {
  beforeEach(() => {
    cy.login();
  });

  context('Account Creation, Edit and List', () => {
    afterEach(() => {
      accountPage.deleteAccount();
    });

    it('Create account', () => {
      const accountName = createAccount();
      
      dashboardPage.accountMenu('Adicionar');
      accountPage.createAccount(accountName);
      accountPage.verifyMessage('Conta adicionada com sucesso!');
    });

    it('Edit account', () => {
      dashboardPage.accountMenu('Adicionar');
      accountPage.createAccount('Nubank');
      accountPage.editAccount('Updated Account');
      accountPage.verifyMessage("Conta alterada com sucesso!");
    });

    it('List account', () => {
      cy.createAccount('Conta para listar');
      dashboardPage.accountMenu('Listar');
      accountPage.verifyList(1);
    });
  });

  context('Account Deletion', () => {
    it('Delete account', () => {
      dashboardPage.accountMenu('Adicionar');
      accountPage.createAccount('Account to delete');
      accountPage.deleteAccount();
      accountPage.verifyMessage("Conta removida com sucesso!");
    });
  });

  context('Account Validation', () => {
    it('Create account with empty name', () => {
      dashboardPage.accountMenu('Adicionar');
      accountPage.createAccount('');
      accountPage.verifyMessage("Informe o nome da conta");
    });
  });
});