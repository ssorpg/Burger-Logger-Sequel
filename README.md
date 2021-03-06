# The Burger Logger Sequel

Burgers taste great! But walking to a restaurant to order one can sometimes take too much time, effort, and money. Burger Logger is here to save the day! Eat virtual burgers from the comfort of your own home.

[![A video of The Burger Logger Sequel being used by the developer.](https://img.youtube.com/vi/wkTKyYfjIfc/0.jpg)](https://www.youtube.com/watch?v=wkTKyYfjIfc)

<br>

<h2>Instructions</h2>

<h3>Online</h3>

Visit https://burgerloggersequel-ssorpg.herokuapp.com/ and eat as many burgers as you want with a preset Burger Logger!

<br>

<h3>Offline</h3>

1. Clone the repository to your computer.
2. Install the required npm packages with:

> npm i

3. In the 'config' folder, rename the 'exampleConfig.js' file to 'config.js' and replace 'yourusername' and 'yourpassword' with your MySQL username and password respectively.
4. Run the 'schema.sql' file either in MySQL Workbench, or in your MySQL terminal.
5. Visit http://localhost:8080/ and start eating burgers!

<br>

<h2>API</h2>

<h3>Burger API</h3>

> /api/burgers

Returns a list of all the burgers as json objects.

> /api/burgers/someid

Returns a specific burger with the given id as a json object.

<h3>User API</h3>

> /api/users

Returns a list of all the users as json objects.

> /api/users/someid

Returns a specific user with the given id as a json object.

<br>

<h2>Dependencies</h2>

Here is a list of dependencies for this project:

<h3>Standalone</h3>

* Node.js
* MySQL

<h3>Node Packages</h3>

* Express
* Express-Handlebars
* MySQL2
* Sequelize

<h3>HTML Embeds</h3>

* jQuery
* Bootstrap & Bootstrap JS
