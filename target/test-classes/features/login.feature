Feature: Login feature

  @positive
  Scenario: User should be able to logged in successfully
    Given User is on homepage
    When User enter valid username
    And user enter valid password
    And user click on log in button
    Then User should be able to logged in successfully

  @negative
  Scenario Outline:User should not be able to logged in successfully
    Given User is on homepage
    When user enters invalid Username "<UserName>"
    And user enters invalid  password "<PassWord>"
    And user click on log in button
    Then User should not be able to logged in successfully and "<receive message>"

    Examples:
      | UserName | PassWord | receive message          |
      | Admin    |          | Password cannot be empty |
      |          | admin123 | Username cannot be empty |
      | Anil     | 1234     | Invalid credentials      |
