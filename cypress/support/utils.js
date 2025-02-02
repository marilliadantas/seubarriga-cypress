const { fakerPT_BR } = require('@faker-js/faker');

export function createUser() {
    return {
        name: fakerPT_BR.person.firstName(),
        email: fakerPT_BR.internet.email().toLowerCase()
    };
};

export function createAccount() {
    const bankAccounts = [
        "Itaú",
        "Banco do Brasil",
        "Nubank",
        "C6 Bank",
        "Santander",
        "Bradesco"
    ];

    const randomBank = bankAccounts[Math.floor(Math.random() * bankAccounts.length)];
    
    return randomBank;
};

export function getFormattedDate() {
    const currentDate = new Date();
    return currentDate.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
}