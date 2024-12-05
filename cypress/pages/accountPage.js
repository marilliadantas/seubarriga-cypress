import { click, set, getText, getList } from "../support/actions";

class AccountPage {
    selectorsList() {
        const selectors = { 
            nameField: "#nome",
            saveBtn: 'button[type="submit"]',
            alert: '.alert',
            deleteBtn: 'span[class="glyphicon glyphicon-remove-circle"]',
            editBtn: 'span[class="glyphicon glyphicon-edit"]',
            listAccount: 'tbody > tr'
        }

        return selectors
    }

    createAccount(nameAccount) {
        if(nameAccount !== "") {
            set(this.selectorsList().nameField, nameAccount);
        }
        
        click(this.selectorsList().saveBtn);
    }

    editAccount(nameAccount) {
        click(this.selectorsList().editBtn);
        set(this.selectorsList().nameField, nameAccount);
        click(this.selectorsList().saveBtn);
    }

    deleteAccount() {
        click(this.selectorsList().deleteBtn);
    }

    verifyMessage(msg) {
        getText(this.selectorsList().alert, msg);
    }

    verifyList(length) {
        getList(this.selectorsList().listAccount, length);
    }
}

export default AccountPage;