Feature: Payment through Cash
    Customer want to pay the amount through Cash

    Scenario: Searching  a car on Instamotion
        Given I selected a car
        And I do enter the details
            | Phone      | Day          | Time        | FistName | Surname | Email         |
            | 0156258945 | Monday 21.03 | 14:30-15:30 | abc      | abc     | abc@gmail.com |
        And I dont want to trade in my car and i found this website through "Radio" and i can be reached by "Telefon"
        And I would like to receive information with current used car offers and information and agree to the terms.
        Then I  that the verify that my query is submitted successfully.

