var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var table = new Table({
    head: ["Prod No.", "Product", "Department", "Price" , "Quantity"],
    colWidths: [10, 20, 20, 20, 10]
});

var connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "YOURPASSWORD",
    database: "hamazonDB"
});


//test connection to DB
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    // connection.end();
    displayProducts();
    userChoice();

});

//displays the products for the customer
function displayProducts(){
    connection.query("SELECT * FROM products", function(err, res){
        if (err) throw err;
        tableFormat(res);
        // connection.end();
    })
}

//formats the data to display in a table
function tableFormat(res){
    for(i=0; i<res.length; i++){
        table.push(
            [res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
        )
    }
    console.log(table.toString());
}

function checkInventory(product, quantity){
    var index = product - 1;
    connection.query(
        "SELECT * FROM products WHERE " + product,    
    function(err, res){
        if(err) throw err;
    
        console.log(res[index]);
        if(res[index].stock_quantity < quantity){
            console.log("Not enough stock");
        }
        else{
            //update the quantity purchased with a function
            console.log("You've purchased " + quantity + " of " + res[index].product_name);
        }

    });


}

//user chooses the product they want
function userChoice(){
    inquirer
    .prompt([
    {   
        type: "input",
        message: "Enter the product number of the item you want: ",
        name: "product"
    },
    {   
        type: "input",
        message: "Enter the quantity you would like to purchase: ",
        name: "quantity"
    }
    ])
    .then(function(inqRes){
        console.log("PN: " + inqRes.product + "\nQT: " + inqRes.quantity);
        checkInventory(inqRes.product, inqRes.quantity);
    });
}