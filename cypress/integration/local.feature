Feature: Check product details page

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