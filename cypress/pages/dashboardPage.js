import { click, getText, getUrl } from "../support/actions";

class DashboardPage {
    selectorsList() {
        const selectors = { 
            alert: ".alert",
            accountBtn: '.dropdown-toggle',
            createMovement: 'a[href="/movimentacao"]',
            monthlySummary: 'a[href="/extrato"]',
            addButton: 'a[href="/addConta"]',
            listButton: 'a[href="/contas"]'
        }

        return selectors
    }

    accountMenu(option) {
        switch(option) {
            case 'Adicionar': 
                click(this.selectorsList().accountBtn);
                click(this.selectorsList().addButton);
                break;
            case 'Listar': 
                click(this.selectorsList().accountBtn);
                click(this.selectorsList().listButton);
                break;
            default:
                console.error('Please provide a valid option');
                break;
        }
    }    

    accessCreateMovement() {
        click(this.selectorsList().createMovement);
    }

    // accessMonthlySummary() {
    //     cy.get(this.selectorsList().monthlySummary).click();
    // }

    verifyPageUrl(url) { 
       getUrl(url)
    }

    verifyMessage(msg) {
        getText(this.selectorsList().alert, msg);
    }
}

export default DashboardPage;