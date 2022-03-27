import { When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I selected a car', () => {
    cy.visit('https://www.instamotion.com/auto/11RCR4UYNHL4F4PU00C55C8PCLYC4WSMQBN2F64H28T1PA6VFMQB07/').get('#onetrust-accept-btn-handler').click()
    cy.get('.Details__Container-yrg3im-0 > .sc-dnqmqq').click()

});

And('I do enter the details', (datatable) => {

    cy.get(':nth-child(2) > .sc-hcmgZB > .sc-dHmInP > .sc-ejGVNB').click()
    cy.get('.sc-dnqmqq').click()

    datatable.hashes().forEach(element => {

        cy.get('input[type="tel"]').clear().type(element.Phone)
        cy.get('.eNhahd > :nth-child(1) > .sc-hwwEjo > .sc-dqBHgY > .sc-gxMtzJ').clear().type(element.FistName)
        cy.get(':nth-child(2) > .sc-hwwEjo > .sc-dqBHgY > .sc-gxMtzJ').clear().type(element.Surname)
        cy.get(':nth-child(3) > .sc-hwwEjo > .sc-dqBHgY > .sc-gxMtzJ').clear().type(element.Email)


    });


});

And('I dont want to trade in my car and i found this website through {string} and i can be reached by {string}', (findAbountUs, mediumToReach) => {

    cy.get(':nth-child(11) > :nth-child(1) > .sc-jnlKLf > .sc-bbmXgH > .sc-gGBfsJ').select('Nein')
    cy.get(':nth-child(2) > .sc-jnlKLf > .sc-bbmXgH > .sc-gGBfsJ').select(findAbountUs)
    cy.get(':nth-child(12) > :nth-child(1) > .sc-jnlKLf > .sc-bbmXgH > .sc-gGBfsJ').select(mediumToReach)



});

And('I would like to receive information with current used car offers and information and agree to the terms.', () => {
    cy.get(':nth-child(1) > .sc-csuQGl > .sc-jlyJG > .sc-gPEVay').click()
    cy.get(':nth-child(2) > .sc-csuQGl > .sc-jlyJG > .sc-gPEVay').click()
    cy.get('.ModalLead__Wrapper-sc-1x4hd3r-0 > .sc-dnqmqq').click()



});

Then('I  that the verify that my query is submitted successfully.', () => {

    cy.wait(2000)
    cy.get('.sc-dymIpo > h2').should('include.text', 'Deine Nachricht wurde erfolgreich gesendet')


});
