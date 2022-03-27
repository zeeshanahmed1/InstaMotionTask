import { When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I selected a car', () => {
    cy.visit('https://www.instamotion.com/auto/11RCR4UYNHL4F4PU00C55C8PCLYC4WSMQBN2F64H28T1PA6VFMQB07/').get('#onetrust-accept-btn-handler').click()
    cy.get('.Details__Container-yrg3im-0 > .sc-dnqmqq').click()

});

And('I do enter the details', (datatable) => {
    //click finance
    cy.get(':nth-child(1) > .sc-hcmgZB > .sc-dHmInP > .sc-ejGVNB').click()
    //click further
    cy.get('.sc-dnqmqq').click()

    datatable.hashes().forEach(element => {

        cy.get('input[aria-autocomplete="list"]').first().click().type('{upArrow}{enter}',  { force: true })
        cy.get(':nth-child(2) > .sc-dqBHgY').clear().type(element.FistName)
        cy.get(':nth-child(3) > .sc-dqBHgY').clear().type(element.Surname)
        cy.get(':nth-child(4) > .sc-dqBHgY').clear().type(element.Email)
        cy.get('input[type="tel"]').clear().type(element.Phone)

    });


});

And('I dont want to trade in my car and i am not a business customer.', () => {

    cy.get(':nth-child(6) > .sc-bYnzgO > [data-testid="togglebutton"] > .jVGmyd').click()
    cy.get(':nth-child(7) > .sc-bYnzgO > [data-testid="togglebutton"] > .jVGmyd').click()
    cy.get('.sc-gPEVay').click()
    cy.get('.sc-kqlzXE > .sc-dnqmqq').click()

});





Then('I do the assertions that the website took me to the bank financing page {string}',  (webPage)  => {

    cy.wait(10000)
    cy.get('.btn-akzept btn').click()
    cy.url().should('eq', webPage)

});
