
export default class BasePage {

    //baseUrl       = "https://msa-gwr-poc-web-03.azurewebsites.net/en" //Cypress.env('TARGET');
    ukRegionSelector = "a[href='/?country=GB']"
    landingValidator = "//h1[contains(text(),'Select your region:')]"
    launchPromotion = "//a[contains(text(),'Launch Promotion')]"

    cookieMessage = "#ccc-close";
    
    visit(){
        cy.visit('/')
    }

    selectRegion(region){
        switch(region) {
            case 'UK':
                cy.get(this.ukRegionSelector).click()
              break;
            case 'US':
                cy.get(this.usRegionSelector).click()
              break;
            case 'FR':
                cy.get(this.frRegionSelector).click()
              break;
            case 'PL':
                cy.get(this.plRegionSelector).click()
              break;
            case 'CA':
                cy.get(this.caRegionSelector).click()
              break;
            default:
              console.log("ERROR:Cannot lne the regions sepcified")
          }
    }

    confirmRegionPageLoaded(){
        cy.xpath(this.landingValidator).should('be.visible')
    }

    clickLaunchPromotion(){
      cy.xpath(this.launchPromotion).click()
    }

    getPageTitle() {
        return cy.title()
    }

    /*    navigate(path) {
        cy
            .visit(this.baseUrl + path)
            .get(this.cookieMessage)
            .click();
    } 
    */

}
