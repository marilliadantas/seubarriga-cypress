import { click, getMessages, getText, set } from "../support/actions";
import registerElements from "../elements/registerElements";

class RegisterPage {
  fillForms(name, email, password) {
    if (name !== "") {
      set(registerElements.nameField, name);
    }

    if (email !== "") {
      set(registerElements.emailField, email);
    }

    if (password !== "") {
      set(registerElements.passwordField, password);
    }
    click(registerElements.registerBtn);
  }

  verifyMessage(msg) {
    getText(registerElements.alert, msg);
  }

  verifyErrorMessages(messages) {
    getMessages(registerElements.alert, messages);
  }
}

export default RegisterPage;