Feature: Car reservation

  Background:
    Given I open the qabify app
    When I enter the username "user@qabify.com"
    And I enter the password "1234Abc"
    When I click on the button to login

  Scenario Outline: Make a reservation
    Then the captcha code is stored and entered
    When I'm on the journey settings screen
    Then I select the pick up point "<pickup>"
    And I select the drop off point "<dropoff>"
    And I select the car type "<type>"
    Then the estimated price can be calculated
    And the car can be requested
    And the past journeys list contains "<pickup>" and "<dropoff>"

    Examples:
    |pickup     | dropoff    | type     |
    |aeropuerto | mejía      | executive|
    |atocha     | aeropuerto | lite     |

  Scenario: Reservation can not be made without captcha
    Then continue to the journey settings screen
    When I'm on the journey settings screen
    Then I select the pick up point "atocha"
    And I select the drop off point "mejía"
    And I select the car type "executive"
    When the estimated price button is clicked
    Then the app displays the error "error in captcha!" and "captcha typed is wrong"
