var mysql = require("mysql");
var inquirer = require("inquirer");


// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3307,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "bamazon_DB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});
//just a test function to see all of the items listed out 
function start() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function(err, res) {
        //console.log(res);
        console.log("Bamazon products available for purchase:\n");

        for (var i = 0; i < res.length; i++) {
            console.log(" | " + res[i].item_id + " " + res[i].product_name + "...." + "$" + res[i].price + "   amount Available: " + res[i].stock_quantity + "\r\n");
        };
        console.log("--------------------------------");
        ask();
    });

};



function ask() {
    inquirer
        .prompt({
            name: "chooseId",
            type: "input",
            message: "What is the ID of the item you want to purchase"

        }, {
            name: "amountRequested",
            type: "input",
            message: "How many would you like?"
        })

    .then(function(answer) {
        // based on the answer then prompt the user to ask them the quantity that they want to buy and quit with q
        console.log("You Choose id number " + answer);
        connection.query(
                "INSERT"
            )
            // Neeed to make a function that will then up date the current data 

    })
}