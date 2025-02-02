import HomePage from "../pages/homePage";
import MovementPage from "../pages/movementPage";

const homePage = new HomePage();
const movementPage = new MovementPage();

const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('pt-BR', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric'
});

describe("Movement Creation", () => {
  beforeEach(() => {
    cy.login();
    cy.createAccount();
    homePage.accessCreateMovement();
  });

  context("Financial Create Transactions", () => {
    afterEach(() => {
      cy.deletemonthlySummary();
      cy.deleteAccount();
    });

    it("Create pending revenue", () => {
      movementPage.fillForms("Receita", formattedDate, formattedDate, "Salary", "Nagato", "10.000", "Nubank", "Pendente");
      movementPage.verifyMessage("Movimentação adicionada com sucesso!");
    });

    it("Create paid revenue", () => {
      movementPage.fillForms("Receita", formattedDate, formattedDate, "Salary", "Nagato", "10.000", "Nubank", "Pago");
      movementPage.verifyMessage("Movimentação adicionada com sucesso!");
    });

    it("Create pending expense", () => {
      movementPage.fillForms("Despesa", formattedDate, "05/12/2025", "Salary", "Nagato", "10.000", "Nubank", "Pendente");
      movementPage.verifyMessage("Movimentação adicionada com sucesso!");
    });

    it("Create paid expense", () => {
      movementPage.fillForms("Despesa", formattedDate, formattedDate, "Salary", "Nagato", "10.000", "Nubank", "Pago");
      movementPage.verifyMessage("Movimentação adicionada com sucesso!");
    });
  });

  context("Financial Transaction Exception", () => {
    after(() => {
      cy.deleteAccount();
    });

    it("Invalid transaction date", () => {
      movementPage.fillForms("Receita", "05122024", "01/02/2025", "Salary", "Nagato", "10.000", "Nubank", "Pago");
      movementPage.verifyMessage("Data da Movimentação inválida (DD/MM/YYYY)");
    });

    it("Invalid payment date", () => {
      movementPage.fillForms("Receita", "01/02/2025", "32/12/2025", "Salary", "Nagato", "10.000", "Nubank", "Pago");
      movementPage.verifyMessage("Data do pagamento inválida (DD/MM/YYYY)");
    });

    it("Empty transaction date field", () => {
      movementPage.fillForms("Receita", "", "05/12/2025", "Salary", "Nagato", "10.000", "Nubank", "Pago");
      movementPage.verifyMessage("Data da Movimentação é obrigatório");
    });

    it("Empty payment date field", () => {
      movementPage.fillForms("Receita", "01/02/2025", "", "Salary", "Nagato", "10.000", "Nubank", "Pago");
      movementPage.verifyMessage("Data do pagamento é obrigatório");
    });

    it("Empty description field", () => {
      movementPage.fillForms("Receita", "01/02/2025", "05/12/2025", "", "Nagato", "10.000", "Nubank", "Pago");
      movementPage.verifyMessage("Descrição é obrigatório");
    });

    it("Empty interested field", () => {
      movementPage.fillForms("Receita", "01/02/2025", "05/12/2025", "Salary", "", "10.000", "Nubank", "Pago");
      movementPage.verifyMessage("Interessado é obrigatório");
    });

    it("Empty value field", () => {
      movementPage.fillForms("Receita", "01/02/2025", "05/12/2025", "Salary", "Nagato", "", "Nubank", "Pago");
      movementPage.verifyErrorMessages(["Valor é obrigatório", "Valor deve ser um número"]);
    });

    it("Empty value invalid", () => {
      movementPage.fillForms("Receita", "01/02/2025", "05/12/2025", "Salary", "Nagato", "10,000", "Nubank", "Pago");
      movementPage.verifyMessage("Valor deve ser um número");
    });
  });
});