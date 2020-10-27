
import { Given } from "cypress-cucumber-preprocessor/steps";
import { When } from "cypress-cucumber-preprocessor/steps";
import { Then } from "cypress-cucumber-preprocessor/steps";

import BasePage from '../../pages/basepage';
import ukBasePage from '../../pages/ukPages/ukBasePage';
import selectPromo from '../../pages/ukPages/selectPromo';
import promoHome from '../../pages/ukPages/promoHome'
import personalnfo from '../../pages/ukPages/claimForm/personalnfo'
import prodSelection from '../../pages/ukPages/claimForm/prodSelection'
import personalInfo from "../../pages/ukPages/claimForm/personalnfo";

const basepage = new BasePage();
const ukpage = new ukBasePage();
const selectpromo = new selectPromo();
const promohome = new promoHome();
const personainformation = new personalnfo();
const prodselect = new prodSelection();

const logw = 'log/step_execution.log'
Given('Claimant opens Insyt promotion page', () => {
    //cy.writeFile(logw, Cypress.env('logdirpath'))
    cy.task('log', "-->Claimant opens Insyt promotion page")
    // cy.task('err', "-->Claimant open Insyt promotion page111")
    basepage.visit()
});

Given(`Claimant clicks on Launch Promotion Link`, region => {
    cy.task('log', "-->Claimant clicks on Launch Promotion Link" )
    basepage.clickLaunchPromotion()
});

Then(`Claimant should navigates to Start your claim page`, () =>{
    cy.task('log', "-->Claimant should navigates to Start your claim page" )
    promohome.startClaimPageDisplayed()

});

Then(`Ensure "Start Claim" button should be Disabled`, () =>{
    cy.task('log', "-->Ensure \"Start Claim\" button should be Disabled")
    promohome.startClaimButtonIsDisabled()
});

Then(`"Our Terms" link should navigate to Terms page`, () => {
    //This is not happening currently
    cy.task('log', "-->\"Our Terms\" link should navigate to Terms page")
    promohome.ourTermsLinkShouldBeWorking()
    
})

Then(`Clicks on Terms and Conditions checkbox`, () =>{
    //Should be renamed to Claimant accept terms and conditions by clicking the checkboxes
    cy.task('log', "-->Clicks on Terms and Conditions checkbox")
    promohome.checkTermsAndConditionCheckbox()

})

Then(`Ensure "Start Claim" button should be Enabled`, () =>{
    cy.task('log', "-->Ensure \"Start Claim\" button should be Enabled")
    promohome.startClaimButtonIsEnabled()
});
Then(`Clicks on Start Claim button`, () =>{
    cy.task('log', "-->Clicks on Start Claim button")
    promohome.clickStartClaim()
});

Then(`Claimant see new claim form`, () =>{
    cy.task('log', "-->Claimant see new claim form")
    personainformation.verifyPersonalInfoForm()
});

Given('Claimant enters personal details', datatable => {
    cy.task('log', "-->Claimant enters personal details" )
    datatable.hashes().forEach(row => {
        personainformation.enterEmail(row.Email);
        personainformation.selectTitle(row.Title);
        personainformation.enterName(row.FirstName);
        personainformation.enterLname(row.LastName);
        personainformation.enterMobile(row.Phone);
        personainformation.enterDobMonth(row.DOBMonth);
        personainformation.enterDobDay(row.DOBDay);
        personainformation.enterDobYr(row.DOByear);
})
})

Then(`Claimant see error message beside Mobile Field {string}`, (errmsg)=>{
    cy.task('log', "--> Claimant see error message beside Mobile Field" + errmsg)
    personainformation.mobileValidationCheck(errmsg);
})

Then(`Claimant see error message beside Email field {string}`, (errmsg)=>{
    cy.task('log', "--> Claimant see error message beside Mobile Field" + errmsg)
    personainformation.emailValidationCheck(errmsg);
})

Then(`Claimant see error message beside Title Number {string}`, (errmsg)=>{
    cy.task('log', "--> Claimant see error message beside Title Number" + errmsg)
    personainformation.emailValidationCheck(errmsg);
})

Then(`Claimant see error message beside FirstName Field {string}`, (errmsg)=>{
    cy.task('log', "--> Claimant see error message beside FirstName Field" + errmsg)
    personainformation.emailValidationCheck(errmsg);
})

Then(`Claimant see error message beside LastName Field {string}`, (errmsg)=>{
    cy.task('log', "--> Claimant see error message beside LastName Field" + errmsg)
    personainformation.emailValidationCheck(errmsg);
})

Then(`Claimant see error message beside Month Field {string}`, (errmsg)=>{
    cy.task('log', "--> Claimant see error message beside Month Field" + errmsg)
    personainformation.emailValidationCheck(errmsg);
})

Then(`Claimant see error message beside Day Field {string}`, (errmsg)=>{
    cy.task('log', "--> Claimant see error message beside Day Field" + errmsg)
    personainformation.emailValidationCheck(errmsg);
})

Then(`Claimant see error message beside Year Field {string}`, (errmsg)=>{
    cy.task('log', "--> Claimant see error message beside Year Field" + errmsg)
    personainformation.emailValidationCheck(errmsg);
})

Given(`Claimant select {string} region`, region => {
    cy.task('log', "-->Claimant select {string} region" )
    basepage.selectRegion(region)
});

Given(`Claimant select {string} promotion`, promo => {
    cy.task('log', "-->Claimant select {string} promotion" )
    selectpromo.selectPromo(promo)
});

Given(`Claimant Click on Claim Now`, () => {
    cy.task('log', "-->Claimant Click on Claim Now" )
    promohome.pressClaimNow();
});

Given(`Claimant accept terms`, () => {
    cy.task('log', "-->Claimant accept terms" )
    promohome.checkTerms();
    promohome.acceptTerms()
});


Given(`Claimant see claim form`, () => {
    cy.task('log', "-->Claimant see claim form" )
    personainformation.confirmClaimFormLoaded();
});



Given(`Claimant Click Next Button`, () => {
    cy.task('log', "-->Claimant Click Next Button" )
    cy.get("button.btn.btn-primary").last().click()
})

When(`Claimant Enter Email Address as {string}`, email => {
    cy.task('log', "-->Claimant Enter Email Address as {string}" )
    personainformation.enterEmail(email);
});

When(`Claimant Enter First Name as {string}`, first => {
    cy.task('log', "-->Claimant Enter First Name as {string}" )
    personainformation.enterName(first);
});

When(`Claimant Enter Last Name as {string}`, last => {
    cy.task('log', "-->Claimant Enter Last Name as {string}" )
    personainformation.enterLname(last);
});

When(`Claimant Enter number as {string}`, number => {
    cy.task('log', "-->Claimant Enter number as {string}" )
    personainformation.enterMobile(number);
});

When(`Claimant Select Title as {string}`, title => {
    cy.task('log', "-->Claimant Select Title as {string}" )
    personainformation.selectTitle(title);
});

When(`Claimant enter date of birth as {string}`, dob => {
    cy.task('log', "-->Claimant enter date of birth as {string}" )
    personainformation.enterDob(dob);
});

Then(`Claimant Press Next`, () => {
    cy.task('log', "-->Claimant Press Next" )
    personainformation.pressNext();
});

Then(`Claimant see product selection page`, () => {
    cy.task('log', "-->Claimant see product selection page" )
    prodselect.confirmProdPageLoaded();
});

Given(`Claimant select purchased product {string}`, (prod) => {
    cy.task('log', "-->Claimant select purchased product {string}" )
    prodselect.selectProduct(prod);
});

Given(`Claimant enter a random imei number`, () => {
    cy.task('log', "-->Claimant enter a random imei number" )
    prodselect.enterRandomIMEInumber();
});

Given(`Claimant enter {string} as product price`, (price) => {
    cy.task('log', "-->Claimant enter {string} as product price" )
    prodselect.enterProdPrice(price);
});


Given(`Add Product`, () => {
    cy.task('log', "-->Add Product" )
    prodselect.addProduct();
})

Given(`Claimant Press Next for retailers page`, () => {
    cy.task('log', "-->Claimant Press Next for retailers page" )
    prodselect.pressNext()
})


Given(`Claimant Select the retailer {string}`, (retailer) => {
    cy.task('log', "-->Claimant Select the retailer {string}" )
    console.log("DUMMY")
    //prodselect.selectRetails(retailer)
})

Given(`Claimant Press Next to enter date of purchase`, () => {
    cy.task('log', "-->Claimant Press Next to enter date of purchase" )
    prodselect.gotoProductPurchaseDate()
})

Then(`Claimant enter date of purchase as {string}`, (dop) => {
    cy.task('log', "-->Claimant enter date of purchase as {string}" )
    prodselect.enterDateOfPurchase(dop)

})

Then(`Claimant select retailer as {string}`, (retailer) => {
    cy.task('log', "-->Claimant select retailer as {string}" )
    prodselect.enterRetailer(retailer)

})

Given(`Claimant Press Next to upload documents to prove purchase`, () => {
    cy.task('log', "-->Claimant Press Next to upload documents to prove purchase" )
    prodselect.gotoProductPurchaseDate()
})

Given(`Upload document {string}`, (doc) => {
    cy.task('log', "-->Upload document {string}" )
    prodselect.selectToUploadDocument(doc)
    prodselect.uploadDocument()
})

Given(`Claimant enters address details`, datatable => {
    cy.task('log', "-->Claimant enters address details" )
    datatable.hashes().forEach(row => {
        prodselect.enterAddressPost(row.PostCode);
        prodselect.enterAddressLine1(row.Line1);
        prodselect.enterAddressLine2(row.Line2);
        prodselect.enterAddressCity(row.City);
        prodselect.enterAddressCounty(row.County);
    })

    cy.get("button.btn.btn-primary").last().click()
    })

Given(`Claimant select product as {string}`, (prod) => {
    cy.task('log', "-->Claimant select product as {string}" )
    prodselect.selectProduct(prod)
    cy.get("select[id='product']").select('Mobile')
})
Given(`Claimant Enter pin {string} and address`, (pin) => {
    cy.task('log', "-->Claimant Enter pin {string} and address" )
    prodselect.enterAddress(pin)
})

Given('Claimant enters bank details', datatable => {
    cy.task('log', "-->Claimant enters bank details" )
    datatable.hashes().forEach(row => {
        prodselect.enterRecipientType(row.Type);
        prodselect.enterBankHolderName(row.Name);
        prodselect.enterSortCode(row.SortCode);
        prodselect.enterAccnNum(row.AccNo);


})
})

Then(`Claimant Submit Claim`, () => {
    cy.task('log', "-->Claimant Submit Claim" )
    prodselect.submitClaim()
})

/*

Given Claimant Enter Email Address as "p@g.com"
    And Claimant Select Title as "Mr"
    And Claimant Enter First Name as "Pradeep"
    And Claimant Enter Last Name as "Kumar"
    And Claimant Enter number as "9890989089"
    And Claimant enter date of birth as "02 Aug 2002"

*/  