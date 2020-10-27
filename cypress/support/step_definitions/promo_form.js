import { Given } from "cypress-cucumber-preprocessor/steps";

const url = 'https://uat-demo.insytpromotions.com/'
Given('I open Insyt promotion page', () => {
  cy.visit(url)
});

Given('I Select UK region', () => {
    cy.xpath("//*[@id='ROOT']/div/div[1]/div[3]/div/div[1]/div/div/a").click()
});

Given('I Select Appliance Cashback promotion', () => {
  cy.xpath("//*[@id='ROOT']/div/div[1]/div[3]/div/div[5]/div/a").click()
});

Given("I Claim Now and accept terms", () =>{
  cy.xpath("//*[@id='HOME']/div[2]/div/div[1]/div/div/div[1]/a").click();
  cy.xpath("//*[@id='test']/div[1]/div[2]/div/label[1]").click()
  cy.xpath("//*[@id='submit_start_claim']").click()
})