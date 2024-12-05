import LoginPage from '../pages/loginPage'
import HomePage from '../pages/homePage';
import AccountPage from '../pages/accountPage';
import MonthlySummaryPage from '../pages/monthlySummaryPage';

const loginPage = new LoginPage();
const homePage = new HomePage();
const accountPage = new AccountPage();
const monthlySummaryPage = new MonthlySummaryPage();

Cypress.Commands.add('login', () => {
    loginPage.accessLoginPage('/login');
    loginPage.loginWithUser(Cypress.env('EMAIL_VALID'), Cypress.env('PASSWORD_VALID'));
});

Cypress.Commands.add('createAccount', () => {
    homePage.accessAccounts('Adicionar');
    accountPage.createAccount('Nubank');
});

Cypress.Commands.add('deleteAccount', () => {
    homePage.accessAccounts('Listar');
    accountPage.deleteAccount();
});

Cypress.Commands.add('deletemonthlySummary', () => {
    homePage.accessMonthlySummary();
    monthlySummaryPage.deleteMonthlySummary();
});