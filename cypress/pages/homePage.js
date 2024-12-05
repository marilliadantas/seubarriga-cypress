import { click, getText, getUrl } from "../support/actions";
import homeElements from '../elements/homeElements';

class HomePage {
   accessAccounts(option) {
        switch(option) {
            case 'Adicionar': 
                click(homeElements.accountBtn);
                click(homeElements.addBtn);
                break;
            case 'Listar': 
                click( homeElements.accountBtn);
                click(homeElements.listBtn);
                break;
            default:
                console.error('Please provide a valid option');
                break;
        }
    }    

    accessCreateMovement() {
        click(homeElements.createMovementBtn);
    }

    accessMonthlySummary() {
        click(homeElements.monthlySummaryBtn);
    }

    clickLogout() {
        click(homeElements.logoutBtn);
    }

    verifyPageUrl(url) { 
       getUrl(url)
    }

    verifyMessage(msg) {
        getText(homeElements.alert, msg);
    }
}

export default HomePage;