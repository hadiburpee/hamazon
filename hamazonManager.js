var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");
var productDisp = false;

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

//doesn't work becasue there are function calls in hamazoncust.js
// var custExp = require("./hamazonCust.js");

managerChoice();

//manager choice menu
function managerChoice(){
    inquirer
    .prompt([{
        type: "list",
        name: "mgrchoice",
        message: "Which would you like to do?",
        choices: ["View inventory", "View Low Inventory", "Add to Inventory", "Add New Product"]
    }
    ])
    .then(function(inqRes){
        switch(inqRes.mgrchoice){
            case "View inventory":
                console.log("you have selected to view inventory")
                displayProducts()
                setTimeout(managerChoice,200)
                // console.log(custExp)
                break;
            case "View Low Inventory":
                console.log("you have selected to view low inventory")

                setTimeout(managerChoice,200)
                break;
            case "Add to Inventory":
                console.log("you have sleected add to inventory")

                setTimeout(managerChoice,200)
                break;
            case "Add New Product":
                console.log("you have selected to add a product")

                setTimeout(managerChoice,200)
                break;
        }
    })
}

//displays the products in the database
function displayProducts(){
    connection.query("SELECT * FROM products", function(err, res){
        if (err) throw err;
        tableFormat(res);
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
    console.log("\n  ");
}

//displays low inventory products
function displayLowInventory(){

}

//adds to inventory
function addInventory(){

}

//adds new product
function createInventory(){
    
}


