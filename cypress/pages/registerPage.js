import { click, getMessages, getText, set } from "../support/actions";

class RegisterPage {
    selectorsList() {
        const selectors = { 
            nameField: "#nome",
            emailField: "#email",
            passwordField: "#senha",
            registerBtn: 'input[type="submit"]',
            alert: ".alert"
        }

        return selectors
    }

    fillForms(name, email, password) {
        if(name !== "") {
            set(this.selectorsList().nameField, name);
        }
        
        if(email !== "") {
            set(this.selectorsList().emailField, email);
        }
        
        if(password !== "") {
            set(this.selectorsList().passwordField, password);
        }

        click(this.selectorsList().registerBtn);
    }

    verifyMessage(msg) {
        getText(this.selectorsList().alert, msg);
    }

    verifyErrorMessages(messages) {
        getMessages(this.selectorsList().alert, messages)
    }
}

export default RegisterPage;