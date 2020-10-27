
export default class ukBasePage {

    xclaimNow = "//a[contains(text(),'CLAIM NOW')]"
    

    cookieMessage = "#ccc-close";


    clickClaimNow(){
        cy.xpath(this.xclaimNow).click()
    }


}