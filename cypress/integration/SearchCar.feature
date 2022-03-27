Feature: Searching cars on Instamotion
  Customer want to search for a car

  Scenario: Searching  a car on Instamotion
    Given I open the website of Instamotion "https://www.instamotion.com/"
    And I enter the brand by selecting Brand as "Audi"
    And Model number as "A3"
    Then I do the assertions for car search of my desired model as "A3"
