# hamazon

This is the readme for the amazon store front we created, I named it hamazon.  I built two of the modules, one for customer to purchase products and the other for a manager to perform some administrative functions.  

I used mysql database to store the products by product number, name, department, price and quantity.  

For the customer interface, they only have the option to purchase products.  When it loads up, the products for sale are displayed in a table format.  I used an npm called cli-table to display the products nicely.  If the user chooses to order too many items, they will be prompted that there is not enough stock.

For the manager interface, they are given a menu to choose from 4 options, view products, view low inventory products (under 50), add inventory and add products.  After choosing an option, the manager is taken to other prompts to proceed.