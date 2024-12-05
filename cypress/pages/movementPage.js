import { set, select, click, getText, check, getMessages } from "../support/actions";
import movementElements from '../elements/movementElements';

class MovementPage {
    fillForms(option, dateOfMovement, paymentDate, description, interested, value, account, status) {
        if (option) {
            select(movementElements.dropdownType, option)
        }

        if (dateOfMovement !== '') {
            set(movementElements.inputDateMovement, dateOfMovement)
        }

        if (paymentDate !== '') {
            set(movementElements.inputDatePayment, paymentDate)
        }

        if (description !== '') {
            set(movementElements.inputDescription, description);
        }

        if (interested !== '') {
            set(movementElements.inputInterested, interested);
        }

        if (value !== '') {
            set(movementElements.inputValue, value);
        }

        select(movementElements.inputAccount, account);

        if (status === 'Pago') {
            check(movementElements.radioBtnPaid, status);
        }
        
        if (status === 'Pendente') {
            check(movementElements.radioBtnPending, status);
        }

        click(movementElements.saveBtn);
    }    

    verifyMessage(msg) {
        getText(movementElements.alertMessage, msg);
    }

    verifyErrorMessages(messages) {
        getMessages(movementElements.alertList, messages);
    }
}

export default MovementPage;