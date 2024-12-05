import LoginPage from '../pages/loginPage'
import HomePage from '../pages/homePage';

const loginPage = new LoginPage();
const homePage = new HomePage();

describe('Login page', () => {
  beforeEach(() => {
    loginPage.accessLoginPage('/login');
  });

  it('Login successfully', () => {
    loginPage.loginWithUser(Cypress.env("EMAIL_VALID"), Cypress.env("PASSWORD_VALID"))
    homePage.verifyPageUrl('/logar')
    homePage.verifyMessage('Bem vindo, Mari!')
  });

  it('Invalid email', () => {
    loginPage.loginWithUser(Cypress.env("EMAIL_INVALID"), Cypress.env("PASSWORD_VALID"))
    loginPage.verifyErrorAlert('Problemas com o login do usuário')
  });

  it('Invalid password', () => {
    loginPage.loginWithUser(Cypress.env("EMAIL_VALID"), Cypress.env("PASSWORD_INVALID"))
    loginPage.verifyErrorAlert('Problemas com o login do usuário')
  });

  it('Empty email', () => {
    loginPage.loginWithUser("", Cypress.env("PASSWORD_VALID"))
    loginPage.verifyErrorAlert('Email é um campo obrigatório')
  });

  it('Empty password', () => {
    loginPage.loginWithUser(Cypress.env("EMAIL_VALID"), "")
    loginPage.verifyErrorAlert('Senha é um campo obrigatório')
  });

  it('Empty fields', () => {
    loginPage.loginWithUser("", "")
    loginPage.verifyErrorAlerts([
      'Email é um campo obrigatório',
      'Senha é um campo obrigatório'
    ]);
  });
});