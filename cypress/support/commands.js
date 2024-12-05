import { visitPage } from './actions';
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage';
import AccountPage from '../pages/accountPage';
// import MonthlySummaryPage from '../pages/monthlySummaryPage';

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const accountPage = new AccountPage();
// const monthlySummaryPage = new MonthlySummaryPage();

Cypress.Commands.add('login', () => {
    loginPage.accessLoginPage('/login');
    loginPage.loginWithUser(Cypress.env('EMAIL_VALID'), Cypress.env('PASSWORD_VALID'));
});

Cypress.Commands.add('createAccount', () => {
    dashboardPage.accountMenu('Adicionar');
    accountPage.createAccount('Nubank');
});

Cypress.Commands.add('deleteAccount', () => {
    dashboardPage.accountMenu('Listar');
    accountPage.deleteAccount();
});

// Cypress.Commands.add('deletemonthlySummary', () => {
//     dashboardPage.accessMonthlySummary();
//     monthlySummaryPage.deleteMonthlySummary();
// });