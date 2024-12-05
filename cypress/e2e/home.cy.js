import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginPage";

const homePage = new HomePage();
const loginPage = new LoginPage();

describe("Home page", () => {
  beforeEach(() => {
    cy.login();
  });

  it("Logout successfully", () => {
    homePage.clickLogout();
    loginPage.verifyPageUrl("logout");
  });
});