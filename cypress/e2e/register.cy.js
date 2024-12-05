import { createUser } from '../support/utils';
import LoginPage from '../pages/loginPage'
import RegisterPage from '../pages/registerPage';

const loginPage = new LoginPage();
const registerPage = new RegisterPage();
const user = createUser();

describe('Register page', () => {
  beforeEach(() => {
    loginPage.accessLoginPage('/login');
    loginPage.accessRegisterPage();
  });

  it('Register user successfully', () => {
    registerPage.fillForms(user.name, user.email, Cypress.env("PASSWORD_VALID"));
    registerPage.verifyMessage("Usuário inserido com sucesso");
  });

  it('Empty name', () => {
    registerPage.fillForms("", user.email, Cypress.env("PASSWORD_VALID"));
    registerPage.verifyMessage("Nome é um campo obrigatório");
  });

  it('Empty email', () => {
    registerPage.fillForms(user.name, "", Cypress.env("PASSWORD_VALID"));
    registerPage.verifyMessage("Email é um campo obrigatório");
  });

  it('Empty password', () => {
    registerPage.fillForms(user.name, user.email, "");
    registerPage.verifyMessage("Senha é um campo obrigatório");
  });

  it('Empty fields', () => {
    registerPage.fillForms("", "", "");
    registerPage.verifyErrorMessages([
      "Nome é um campo obrigatório", 
      "Email é um campo obrigatório", 
      "Senha é um campo obrigatório"
    ]);
  });
});