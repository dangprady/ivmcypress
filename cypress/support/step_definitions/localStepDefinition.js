import { Given } from "cypress-cucumber-preprocessor/steps";
import { Then } from "cypress-cucumber-preprocessor/steps";

const url = 'http://localhost:8080/'


Given('You visit local website', () => {
    cy.visit(url)
});

Given('You select Shared project', () => {
    cy.get("input[value='Use the shared project']").click()
})

Given('You goto Product Catalog', () => {
    cy.get("a[href='/en-US/store']").click()
})

Given('You select product', () => {
    cy.get("img[alt='Brazil Natural Barra Grande']").click()
})

Then('You see product details', () => {
    cy.xpath("//dl/dd[contains(text(), 'Sitio Barra Grande')]").should('be.visible')
})
