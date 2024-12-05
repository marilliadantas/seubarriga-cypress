import { click, set, getText, getList } from "../support/actions";
import accountElements from '../elements/accountElements';

class AccountPage {
    createAccount(nameAccount) {
        if(nameAccount !== "") {
            set(accountElements.nameField, nameAccount);
        }
        
        click(accountElements.saveBtn);
    }

    editAccount(nameAccount) {
        click(accountElements.editBtn);
        set(accountElements.nameField, nameAccount);
        click(accountElements.saveBtn);
    }

    deleteAccount() {
        click(accountElements.deleteBtn);
    }

    verifyMessage(msg) {
        getText(accountElements.alert, msg);
    }

    verifyList(length) {
        getList(accountElements.listAccount, length);
    }
}

export default AccountPage;