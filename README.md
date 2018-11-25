# hamazon

This is the readme for the amazon store front we created, I named it hamazon.  The assignment covers mysql and using CRUD to use a database to store products for sale.  I built two of the modules, one for the customer, and one for the manager.

Mysql database stored the products by product number, name, department, price and quantity.    

Customer Interface

This is a very simple interface.  It connects to the already generated mysql database and displays the products for the customer.  It prompts them to input which item number they want to purchase and the quantity.  If the customer selects a quantity not available, the store informs them that they do not have that many.

The manager interface is more interactive.  It presents ther user with 4 options, view products, view low stock products(<50), update inventory quantity, and add products.  This is built so the user never has to exit once they start, they will always have a list of options to choose from.  When updating inventory quantity, the number you are entering is the actual quantity and will not be added to the quantity.  For example, if the quantity is 50 and you input 4, the new quantity is 4.  When you add a new product, you receive 4 prompts asking for all the table data, once entered, you can view the inventory again and see the new product added at the bottom of the table.

video links:

https://github.com/hadiburpee/hamazon/blob/master/hamazonManager.mov

https://github.com/hadiburpee/hamazon/blob/master/hamazonCust.mov

