import { Then } from "cypress-cucumber-preprocessor/steps";

Then(`I see {string} in the title`, (title) => {
  cy.title().should('include', title)
});

Then('I accept cookies', () =>{
  cy.get("#acceptCookie").click();
});

Then('I see Claim Form', () => {
  cy.contains('What is your email address?')
})