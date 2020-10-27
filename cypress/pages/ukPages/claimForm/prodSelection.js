import 'cypress-file-upload';

export default class prodSelection {
    landingValidator = "//div[contains(text(), 'Select the product you purchased')]"
    selectProd = "select[id='productType']"
    prodPrice = "input[id='price']"
    imeinumber = "input[id='serial']"
    addProd = "button[type='submit']"
    next = "//button[@type='submit' and contains(., 'NEXT')]" 
    //nextPage
    retailers = "select[name='section_where[retailer]']"
    nextOnProductPage = "//button[@type='submit' and contains(., 'NEXT')]"

    //nextPage
    prevMonth = "span.flatpickr-prev-month"
    //dateOfPurchase = "label[id='purchaseDate__value_']"
    dateOfPurchase = "button#purchaseDate.btn.h-auto"

    //next Page
    uploadPath = "input[type='file']"
    uploadButton = "button[type='submit']"

    //Next Page
    addressPost = "input[id='postCode']"
    addressLine1 = "input[id='addressLine1']"
    addressLine2 = "input[id='addressLine2']"
    addressCity = "input[id='cityOrTown']"
    addressCounty = "input[id='county']"

    //Next Page Bank Details
    bankHolderName = "input[id='accountHolderName']"
    recipientType = "select[id='legalType']"
    sortCode = "input[id='sortCode']"
    accnNum = "input[id='accountNumber']"

    //submitClaim
    submitClaimBtn = "//*[@id='submit_claim']"

    // Claim number
    clickToCopy = "//*[@id='clickToCopy']"

    confirmProdPageLoaded(){
        cy.xpath(this.landingValidator).should('be.visible')
    }

    selectProduct(productName){
        cy.get(this.selectProd).select(productName)

    }

    enterRandomIMEInumber(){
        var num = Math.floor(100000000000000 + Math.random() * 900000000000000);
        console.log("Generated IMEI number is: " + num)
        cy.get(this.imeinumber).clear().type(num)
    }

    enterProvidedIMEInumber(num){
        cy.get(this.imeinumber).clear().type(num)
    }

    enterProdPrice(price){
        cy.get(this.prodPrice).clear().type(price)
        cy.get(this.imeinumber).scrollIntoView({ duration: 2000 })
    }

    addProduct(){
        //Functionality to be added
        cy.get(this.addProd).click({force: true})
    }

    pressNext(){    
        cy.xpath(this.next).last().click()
    }


    // Next Page
    selectRetails(retailer){
        cy.get(this.retailers).select(retailer)
    }

    gotoProductPurchaseDate(){
        cy.xpath(this.next).last().click({force: true})
        //this.pressNext()
    }

    // Next Page
    enterDateOfPurchase(dop){
        //cy.xpath("//*[@id='purchaseDate__value_']/text()").type(dop)
        cy.get(this.dateOfPurchase).click()
        //cy.get("div.b-calendar.b-form-date-calendar.w-100").should('be.visible')
        cy.get("div#__BVID__160__calendar-wrapper_.b-calendar-inner").should('be.visible')
        
        
        cy.get("button[title='Previous month']").click()
        cy.get("div.row.no-gutters").eq(2).click()
        cy.get(this.dateOfPurchase).scrollIntoView({ duration: 2000 })
        //cy.get(this.dateOfPurchase).type(dop)
        //cy.xpath("//*[@id='__BVID__421__calendar-grid_']/div[2]/div[3]").click()
        //cy.get(this.prevMonth).click()
        //var date = "span[aria-label='xxxx']".replace('xxxx', dop)
        //cy.get(date).click()
        //cy.get("i.fal.fa-calendar-alt").click()
    }

    gotoDocumentUploadPage(){
        this.pressNext()
    }

    enterRetailer(retail){
        cy.get("select[id='retailer']").select(retail)
    }

    //Next Page

    selectToUploadDocument(path){
        cy.get(this.uploadPath).attachFile(path, { subjectType: 'drag-n-drop' })
    }

    uploadDocument(){
        //cy.get(this.uploadPath).scrollIntoView({ duration: 2000 })
        cy.get(this.uploadButton).last().click()
        //cy.xpath("//*[@id='__layout']/div/div/div/div[2]/span/form/div[4]/fieldset/button").click()
        //cy.get("td[data-label='File']").scrollIntoView({ duration: 2000 })
    }

    gotoAddressPage(){
        this.pressNext()
    }


    //Next Page

    enterAddressPost(post){
        cy.get(this.addressPost).type(post)

    }
    enterAddressLine1(line1){
        cy.get(this.addressLine1).type(line1)
    }
    enterAddressLine2(line2){
        cy.get(this.addressLine2).type(line2)
    }
    enterAddressCity(city){
        cy.get(this.addressCity).type(city)
    }
    enterAddressCounty(county){
        cy.get(this.addressCounty).type(county)
    }

    enterAddress(pin){
        cy.get(this.addressPost).type()
        cy.get(this.addressLine1).type()
        cy.get(this.addressLine2).type()
        cy.get(this.addressCity).type()
        cy.get(this.addressCounty).type()
    }

    gotoBankDetailsPage(){
        this.pressNext()
    }

    //Next Page (Bank Details)
    enterBankHolderName(hName){
        cy.get(this.bankHolderName).type(hName)
    }

    enterRecipientType(rType){
        cy.get(this.recipientType).type(rType)
    }

    enterSortCode(scode){
        cy.get(this.sortCode).type(scode)
    }

    enterAccnNum(acNum){
        cy.get(this.accnNum).type(acNum)
        //cy.xpath(this.accnNum).click()

    }
    gotoLastPage(){
        this.pressNext() 
    }

    //Next Page Submit Claim

    submitClaim(){
        cy.xpath(this.submitClaimBtn).last().click()

    }
    // Next Page

    copyClaimnum(){
        cy.xpath(this.clickToCopy).scrollIntoView().click()
    }

}