import LoginPage from '../pages/loginPage'
import HomePage from '../pages/homePage';
import messageLogin from "../fixtures/msgLogin.json";
import messageHome from "../fixtures/msgHome.json";

const loginPage = new LoginPage();
const homePage = new HomePage();

describe('Login page', () => {
  beforeEach(() => {
    loginPage.accessLoginPage('/login');
  });

  it('Login successfully', () => {
    loginPage.loginWithUser(Cypress.env("EMAIL_VALID"), Cypress.env("PASSWORD_VALID"))
    homePage.verifyPageUrl('/logar')
    homePage.verifyMessage(messageHome.welcome)
  });

  it('Invalid email', () => {
    loginPage.loginWithUser(Cypress.env("EMAIL_INVALID"), Cypress.env("PASSWORD_VALID"))
    loginPage.verifyErrorAlert(messageLogin.loginInvalid)
  });

  it('Invalid password', () => {
    loginPage.loginWithUser(Cypress.env("EMAIL_VALID"), Cypress.env("PASSWORD_INVALID"))
    loginPage.verifyErrorAlert(messageLogin.loginInvalid)
  });

  it('Empty email', () => {
    loginPage.loginWithUser("", Cypress.env("PASSWORD_VALID"))
    loginPage.verifyErrorAlert(messageLogin.emailRequired)
  });

  it('Empty password', () => {
    loginPage.loginWithUser(Cypress.env("EMAIL_VALID"), "")
    loginPage.verifyErrorAlert(messageLogin.passwordRequired)
  });

  it('Empty fields', () => {
    loginPage.loginWithUser("", "")
    loginPage.verifyErrorAlerts([
      messageLogin.emailRequired,
      messageLogin.passwordRequired
    ]);
  });
});