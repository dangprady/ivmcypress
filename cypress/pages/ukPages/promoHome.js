
export default class promoHome {

    claimNow = "a[href='/appliance/gb/en/claims-page']";
    startClaim = "a.btn.btn-primary.btn-lg"
    termsCheckBox = "input[type='checkbox']"


    xapplianceCashback = "//h5[contains(text(),'Appliance Cashback')]/following-sibling::*";


    pressClaimNow(){
        cy.get(this.claimNow).click({ multiple: true, force: true })
        
    }

    checkTerms(){
        cy.get(this.termsCheckBox).click({ force: true })
    }
    acceptTerms(){
        cy.get(this.startClaim).click()
    }
    startClaimPageDisplayed(){
        cy.findByText(/Start your claim/i, { timeout: 7000 }).should(
            'exist'
            )
    }
    
    startClaimButtonIsDisabled(){
        cy.findByRole('link', { name: /Start claim/i }).should(
            'have.attr', 'aria-disabled', "true"
          )
    }

    startClaimButtonIsEnabled(){
        cy.findByRole('link', { name: /Start claim/i }).should(
            'not.have.attr', 'aria-disabled', "true"
          )
    }
    ourTermsLinkShouldBeWorking(){
        cy.findAllByRole('link',  { name: /our terms/i}).should(
            'have.attr', 'href', "/en/terms"
        )
        cy.findAllByRole('link',  { name: /our terms/i}).click()
        cy.url().should('contain.text', 'terms')
        cy.findAllByText(/Eligibility/i, { timeout: 7000 }).should(
            'exist'
            )
    }
    checkTermsAndConditionCheckbox(){
        cy.findByRole('checkbox',{ name: /terms/i}).click({force: true})
        //cy.contains('By checking this box you agree to').click('left')
        //cy.document()
        //cy.get(this.termsCheckBox).click()
    }

    clickStartClaim(){
        cy.findByRole('link', { name: /\.*Start claim\.*/i , timeout: 7000 }).click()
        //cy.find 'Start claim').click()
    }

    
}