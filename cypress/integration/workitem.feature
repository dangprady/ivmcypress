Feature: Claimant can visit Start claim page and can enter his/her personal details

  Claimant can visit Start claim page and can enter his/her personal details

  @reg @WorkItem-30
  Scenario: WorkItem 30 Verify user cannot access start claim page if mandatory terms and conditions are not accepted. 

    Given Claimant opens Insyt promotion page
    Then Claimant clicks on Launch Promotion Link
    Then Claimant should navigates to Start your claim page
    Then Ensure "Start Claim" button should be Disabled


  @reg @WorkItem-30
  Scenario: WorkItem 30 Verify user able to start claim after accepting terms and conditions

    Given Claimant opens Insyt promotion page
    Then Claimant clicks on Launch Promotion Link
    Then Claimant should navigates to Start your claim page
    Then Ensure "Start Claim" button should be Disabled
    Then Clicks on Terms and Conditions checkbox
    And Ensure "Start Claim" button should be Enabled
    And Clicks on Start Claim button
    Then Claimant see new claim form

 @reg @WorkItem-30
  Scenario: WorkItem 30 Verify The claimant is able to access and review the terms and conditions.
    Given Claimant opens Insyt promotion page
    Then Claimant clicks on Launch Promotion Link
    Then Claimant should navigates to Start your claim page
    Then Ensure "Start Claim" button should be Disabled
    And "Our Terms" link should navigate to Terms page

  @reg @WorkItem-33
  Scenario: WorkItem 33 Claimant enters invalid mobile number and checks for error message
    Given Claimant opens Insyt promotion page
    Then Claimant clicks on Launch Promotion Link
    Then Claimant should navigates to Start your claim page
    And Clicks on Terms and Conditions checkbox
    And Clicks on Start Claim button
    Then Claimant see new claim form
    Given Claimant enters personal details
      | Email | Title | FirstName | LastName | Phone | DOBMonth | DOBDay | DOByear|
      | abc@gmail.com | Mr | First | Last | 54-1-75-4-301-0  | September  | 1       | 1999 |
    Then Claimant see error message beside Mobile Field "The mobile field format is invalid"

  @reg @WorkItem-33
  Scenario: WorkItem 33  Claimant does not enters any field and checks for error message
    Given Claimant opens Insyt promotion page
    Then Claimant clicks on Launch Promotion Link
    Then Claimant should navigates to Start your claim page
    And Clicks on Terms and Conditions checkbox
    And Clicks on Start Claim button
    Then Claimant see new claim form
    Then Claimant Click Next Button
    Then Claimant see error message beside Email field "The email field is required"
    Then Claimant see error message beside Title Number "The Title field is required"
    Then Claimant see error message beside FirstName Field "The firstName field is required"
    Then Claimant see error message beside LastName Field "The lastName field is required"
    Then Claimant see error message beside Mobile Field "The mobile field is required"
    Then Claimant see error message beside Month Field "The Month of birth field is required"
    Then Claimant see error message beside Day Field "The Day of birth field is required"
    Then Claimant see error message beside Year Field "The Year of birth field is required"


  @reg @WorkItem-33
  Scenario: WorkItem 33  Claimant enters invalid email Id number and checks for error message
    Given Claimant opens Insyt promotion page
    Then Claimant clicks on Launch Promotion Link
    Then Claimant should navigates to Start your claim page
    And Clicks on Terms and Conditions checkbox
    And Clicks on Start Claim button
    Then Claimant see new claim form

    Given Claimant enters personal details
      | Email | Title | FirstName | LastName | Phone | DOBMonth | DOBDay | DOByear|
      | invalid.mail#@21313.2com | Mr | First | Last | 541-754-3010 | September  | 1       | 1999 |
    Then Claimant see error message beside Email field "The email field must be a valid email"


  @reg @WorkItem-33
  Scenario: WorkItem 33  Claimant enters special characters and checks for error message
    Given Claimant opens Insyt promotion page
    Then Claimant clicks on Launch Promotion Link
    Then Claimant should navigates to Start your claim page
    And Clicks on Terms and Conditions checkbox
    And Clicks on Start Claim button
    Then Claimant see new claim form

    Given Claimant enters personal details
      | Email | Title | FirstName | LastName | Phone | DOBMonth | DOBDay | DOByear|
      | \/!^@-l#@&*((.2com | Mr | First | Last | 541-\/!^@-l#@&*((.2com | September  | 1       | 1999 |
    Then Claimant see error message beside Email field "The email field must be a valid email"
    Then Claimant see error message beside Mobile Field "The mobile field format is invalid"
    