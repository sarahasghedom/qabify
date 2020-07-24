Feature: Navigation
  As a user
  I want to be able to navigate through the app

  Background:
    Given I open the demo app

  Scenario: Navigate through the app link by link
    Then I navigate to the login page
    Then I navigate to the forms page
    Then I navigate to the home page
    Then I navigate to the webview page
    Then I navigate to the swipe page
    Then I close the demo app

  Scenario Outline: Navigate through the app
    When I navigate to "<menu>"
    Then the page has the title "<title>"
    Then I close the demo app

    Examples:
    |menu     | title                 |
    |webview  | loading               |
    |home     | webdriver             |
    |login    | login / sign up form  |
    |forms    | form components       |
    |swipe    | swipe horizontal      |
