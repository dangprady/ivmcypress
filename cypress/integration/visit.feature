Feature: Submit a Claim

  Claimant want to submit a claim in UK Appliance Cashback
  
  @reg @smoke
  Scenario: Claimant submit a successful claim
    Given Claimant opens Insyt promotion page
    And Claimant click launch promotion
    And Claimant accept terms

    Given Claimant enters personal details
    | Email | Title | FirstName | LastName | Phone | DOB |
    | p@g.com | Mr | Pradeep | Kumar | 9890989089 | 2 August 2002 |
    
    And Claimant Click Next Button

    Then Claimant enters address details
    | PostCode | Line1 | Line2 | City | County |
    | BT43 6DF | McKillens Ltd | 78-90 Church Street | Ballymena | County Antrim |
    
    And Claimant enter date of purchase as "09 09 2020"
    And Claimant select retailer as "Jessops"

    Then Claimant select product as "Mobile Phone"
    And Claimant enter a random imei number
    And Claimant enter "20" as product price
    Then Add Product
    And Claimant Click Next Button
  
    Then Upload document "pbox-1.pdf"
    And Claimant Click Next Button
    And Claimant Click Next Button
    
    Then Claimant enters bank details
    | Name | Type | SortCode | AccNo |
    | Pradeep | Person | 50-40-30 | 12389098 |

    And Claimant Click Next Button
