# _Costco Game_

#### Allows user to choose a character class and name. The user can then attempt to negotiate with computer "bosses" to increase their seniority. For certain increases in seniority, the player's timeoff increases. Once the player's time off reaches a certain level, they win._, 4/15/2020_

#### By _**DJ Zevenbergen, Julia Seidman, Nitun Datta**_

## Description

_This web application uses classes, looping, arrays, to create a user's character. The user can then attempt to negotiate with computer "bosses" to increase their seniority. For certain increases in seniority, the player's timeoff increases. Once the player's time off reaches a certain level, they win.._

## Setup/Installation Requirements

* Download entire repo
* npm install
* npm run start


## Specs

* - The program creates a character based on the user's selection
    * Input: Name: "Ted" Job: "PizzaCutter" 
    * Output: Your Character: "Ted, a Pizza Cutter in Warehouse 327.  Your Seniority Level is 2.  Your Stress Level is 3.  You have 0 days time off.  Your goal is to reach 5 days off before the stress forces you to quit."

* - The program calculates and returns a price based on the amound of toppings, with cheese not counting as an extra topping.
    * Input: "Large", "Cheese", "Pepperoni", "Anchovies"
    * Output: "Pizza 1, "Large", "Cheese", "Pepperoni", "Anchovies", "$14.00"

* - The program has capabilities to handle multiple different pizzas, calculating total cost upon order
    * Input: '"Large","Cheese", "Pepperoni", "Anchovies", '"Small", "Cheese", "Sausage"'
    * Output: '"Pizza 1", "Large","Cheese", "Pepperoni", "Anchovies", "$14.00"', '"Pizza 2", "Small", "Cheese", "Sausage", "$8.00"' 


* - As the user orders, they should be able to click on a list of their pizzas to see details, and delete a pizza if desired.
    * Input: "Pizza 1" on click
    * Output: "Large","Cheese", "Pepperoni", "Anchovies", "$14.00" - "Delete?"

* - The program deletes pizzas upon click of the delete button.
  * Input: "Cheese, Pepperoni, Anchovies" - "Delete?"  -- on click
  * Output: "pizza 1 - deleted"

* - The program gives a total price and estimated time that the pizza will be ready based on number of pizzas and pickup vs delivery option
  * Example: Estimated time goes up by 5 minutes per pizza and 20 minutes is added if it is a delivery
  


## Known Bugs
- The submit button says "add another pizza" even if the user hasn't entered a pizza yet
- On click, the individual pizza details are displayed far down the page with no alert or anything notifying the user
- The receipt says "your pizzas" plural, even if the user only orders 1 pizza


## Access to Website

_https://djzevenbergen.github.io/pizza-parlor_

## License

Copyright © 2020

**_DJ Zevenbergen_**
