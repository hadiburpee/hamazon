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
});


function displayProducts(){
    connection.query("SELECT * FROM products", function(err, res){
        if (err) throw err;

        for_a_Loop(res);
        connection.end();
    })
}

function for_a_Loop(res){
    for(i=0; i<res.length; i++){
        table.push(
            [res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
        )
    }
    console.log(table.toString());
}