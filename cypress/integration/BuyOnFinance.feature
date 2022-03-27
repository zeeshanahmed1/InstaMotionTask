Feature: Payment through Financing
    Customer want to pay the amount through financing

    Scenario: Payment of Car through Financing
        Given I selected a car
        And I do enter the details
            | Day          | Time        | FistName | Surname | Email         | Phone        |
            | Monday 21.03 | 14:30-15:30 | abc      | abc     | abc@gmail.com | 015685849455 |

        And I dont want to trade in my car and i am not a business customer.
        Then I do the assertions that the website took me to the bank financing page "https://instamotion.bankelf.de/apps/afos/kalkulation/"
