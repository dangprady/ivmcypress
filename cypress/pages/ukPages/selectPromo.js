
export default class ukPromo {

    landingValidator = "//h1[contains(text(),'Select your promotion:')]";
    freepotato = "a[href='https://uat-demo.insytpromotions.com/fleece/gb/en/']";
    laptop2Cashback = "a[href='https://uat-demo.insytpromotions.com/laptopcashback2/gb/en/']";
    xapplianceCashback = "//h5[contains(text(),'Appliance Cashback')]/following-sibling::*";
    acceptCookie = "button#acceptCookie.btn.btn-primary"
    cookieMessage = "#ccc-close";


    selectPromo(promo){
        switch(promo) {
            case 'Appliance Cashback':
                cy.xpath(this.xapplianceCashback).click()
                break;
            case 'Laptop2 Cashback':
                cy.get(this.laptop2Cashback).click()
                break;
            case 'Free Potato':
                cy.get(this.freepotato).click()
                break;
            default:
              console.log("ERROR:Cannot lne the promotion sepcified")
          }
        cy.get(this.acceptCookie).click()
    }

    confirmRegionPageLoaded(){
        cy.xpath(this.landingValidator).should('be.visible')
    }

}
