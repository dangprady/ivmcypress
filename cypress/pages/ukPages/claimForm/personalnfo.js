
export default class personalInfo {
    landingValidator = "//h3[contains(text(), 'get to know each other')]"
    emailadr = "input[type='email']"
    fname = "input[id='firstName']"
    lname = "input[id='lastName']"
    title = "select[id='title']"
    mobile = "input[id='mobile']"
    dob_month = "select[id='month']"
    dob_day = "select[id='day']"
    dob_year = "select[id='year']"
    next = "button[type='submit'][value='NEXT']"

    verifyPersonalInfoForm(){
        cy.contains(" Let's get to know each other").should('be.visible')
    }

    enterDobMonth(mon){
        //Functionality to be added
        cy.get(this.dob_month).select(mon)
    }
    enterDobDay(day){
        cy.get(this.dob_day).select(day)
    } 
    enterDobYr(yr){
        cy.get(this.dob_year).select(yr)
    }
    mobileValidationCheck(errmsg){
        //cy.get(this.).should("contain.text", errmsg)
        cy.findByText(errmsg)
    }
    emailValidationCheck(errmsg){
        cy.findByText(errmsg)
    }

    confirmClaimFormLoaded(){
        cy.xpath(this.landingValidator).should('be.visible')
    }
    enterEmail(email){
        cy.get(this.emailadr).type(email)
        //cy.get(this.emailadr).should()
    }

    enterName(name){
        cy.get(this.fname).type(name)
        //cy.findByLabelText('First name').type(name)
    }

    enterLname(surname){
        cy.get(this.lname).type(surname)
    }

    enterMobile(mobNum){
        cy.get(this.mobile).type(mobNum)
    }

    selectTitle(ctitle){
        //Functionality to be added
        cy.get(this.title).select(ctitle)
    }



    pressNext(){
        cy.get("button.btn.btn-primary").click({force: true})
        //cy.get(this.next).click({multiple: true, force: true})
    }


}