import { click } from "../support/actions";
import monthlySummaryElements from "../elements/monthlySummaryElements";

class MonthlySummaryPage {
    deleteMonthlySummary() {
        click(monthlySummaryElements.deleteBtn);
    }
}

export default MonthlySummaryPage;