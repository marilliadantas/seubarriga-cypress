function click(el) {
    waitElement(el);
    cy.get(el).click();
  };
  
  function waitElement(el) {
    return cy.get(el, { timeout: 10000 }).should("be.visible");
  };
  
  function getText(el, txt) {
    waitElement(el);
    return cy.get(el)
      .should('be.visible')
      .should(($el) => {
        const textoLimpo = $el.text().replace(/\s+/g, ' ').trim();
        expect(textoLimpo).to.equal(txt);
      });
  };

  function visitPage(route) {
    cy.visit(route);
  };
  
  function set(el, text, option = {}) {
    waitElement(el);
    cy.get(el)
      .clear().type(text, option);
  };

  function getUrl(url) {
    cy.url().should('include', url)
  };
  
  function getMessages(el, expectedMessages) {
    return cy.get(el).should('have.length', expectedMessages.length).each(($el, index) => {
      cy.wrap($el)
        .should('be.visible')
        .should('have.text', expectedMessages[index]);
    });
  };
  
  function getList(el, expectedLength) {
    cy.get(el).should('have.length', expectedLength);
  };

  function select(el, option) {
    cy.get(el).select(option);
  };

  function check(el) {
    cy.get(el).check();
  };

  module.exports = {
    set, click, waitElement, getText, getMessages, getList, visitPage, getUrl, select, check
  };