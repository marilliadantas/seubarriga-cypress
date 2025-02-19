import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginPage";

const homePage = new HomePage();
const loginPage = new LoginPage();

describe("Home page", () => {
  beforeEach(() => {
    cy.sessionLogin()
    cy.visit('/')
  });

  it("Logout successfully", () => {
    homePage.clickLogout();
    loginPage.verifyPageUrl("logout");
  });
});