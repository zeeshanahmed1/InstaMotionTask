import { When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I open the website of Instamotion {string}', function (website) {
  cy.visit(website).get('#onetrust-accept-btn-handler').click()

});

And ('I enter the brand by selecting Brand as {string}', function  (Brand) {
  cy.get('[data-testid="landing-make-selector"]').type(Brand).type('{shift}{upArrow}{enter}');


});
And ('Model number as {string}',  function (Model){

  cy.get('[data-testid="landing-model-selector"]').type(Model).type('A3{downArrow}{enter}');
  cy.get('[data-testid="landing-search-button"]').click();
}); 


 Then ('I do the assertions for car search of my desired model as {string}',  function(Model)   {

   cy.wait(10000)
   cy.get('.sc-gGCbJM').should('include.text', 'Audi')

 });

{/* <reference types='cypress'/> */}





// Given("I selected a car", () => {


//    cy.wait(5000)
   




// });
// When("I do enter the details and I dont want to trade in my car and i am not a business customer", () => {

   
  
//    cy.get('a[order="1"]').click()


//    cy.wait(5000)
//    cy.get('#onetrust-accept-btn-handler').click()
//    cy.get('.Details__Container-yrg3im-0 > .sc-dnqmqq')

//    cy.get('.sc-dnqmqq').click()
//    cy.get('#downshift-0-item-1').last().click()
//    cy.get(':nth-child(2) > .sc-dqBHgY').type('abc')
//    cy.get(':nth-child(3) > .sc-dqBHgY').type('abc')
//    cy.get(':nth-child(4) > .sc-dqBHgY').type('abc@gmail.com')
//    cy.get(':nth-child(5) > .sc-brqgnP > :nth-child(1)').type('1631332817')


// });
// Then("I do the assertions that the website took me to the bank financing page", () => {
//    cy.get(3000)
//    cy.get('.eDqzGW').click()
//    cy.wait(5000)
//    cy.get('#cdk-overlay-1 > div > div.ant-drawer-content-wrapper.cookie > div > div > div.ant-drawer-body > app-cookie > div > div.hide-on-desktop.main-button > button.btn-akzept.btn').click()
//    cy.wait(3000)
// });

// Given("I selected a car", () => {
//    cy.visit('https://www.instamotion.com/auto/7P2F86T3RFYWBPKU22C33CPLF11C7ZT0KHQ1UK3HK5UPKFZZC2NFL5U17HN6TJVS50UW9B1X?v3=%22true%22')
//    cy.get('#mainContent > div.options__Column-oxhfkq-3.options__LeftColumn-oxhfkq-4.ZSoyI > div.sc-hgRTRy.kOZNMn > div.sc-iiUIRa.enmpOt > label > div').click()
//    cy.get('#mainContent > div.options__Column-oxhfkq-3.options__LeftColumn-oxhfkq-4.ZSoyI > button').click()
// });
// When("I do enter the details and I dont want to trade in my car and i found this website through Radio and i can be reached by Phone", () => {


// });
// Then("I do verification that my query is submitted successfully", () => {

// });



