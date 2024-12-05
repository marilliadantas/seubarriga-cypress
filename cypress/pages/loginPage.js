import { click, set, getText, getMessages, visitPage, getUrl } from "../support/actions";
import loginElements from "../elements/loginElements";

class LoginPage {
  accessLoginPage(route) {
    visitPage(route);
  }

  accessRegisterPage() {
    click(loginElements.registerBtn);
  }

  loginWithUser(email, password) {
    if (email !== "") {
      set(loginElements.emailField, email);
    }

    if (password !== "") {
      set(loginElements.passwordField, password);
    }

    click(loginElements.loginBtn);
  }

  verifyErrorAlert(msg) {
    getText(loginElements.credentialsAlert, msg);
  }

  verifyErrorAlerts(messages) {
    getMessages(loginElements.credentialsAlert, messages);
  }

  verifyPageUrl(url) {
    getUrl(url);
  }
}

export default LoginPage;