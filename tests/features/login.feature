Feature: Login validations
  As a user
  I want to be able to login
  So I can reserve a car using qabify

  Background:
    Given I open the qabify app

  Scenario: Login successfully
    When I enter the username "user@qabify.com"
    And I enter the password "1234Abc"
    When I click on the button to login
    Then the app shows a captcha code

  Scenario Outline: Login validations
    When I enter the username "<username>"
    And I enter the password "<password>"
    When I click on the button to login
    Then the app displays the error "<errorTitle>" and "<errorText>"

    Examples:
    |username         | password  | errorTitle  | errorText                             |
    |invalidUsername  | 1234Abc   | bad login   | user name or password is not correct  |
    |user@qabify.com  | blablab   | bad login   | user name or password is not correct  |
    |                 | 1234Abc   | bad login   | user name or password is not correct  |
    |user@qabify.com  |           | bad login   | user name or password is not correct  |
