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
    console.log("Hello Welcome to bamazon Space Inventory :)\n");
    connection.query("SELECT * FROM products", function(err, res) {
        //console.log(res);
        console.log("Bamazon products available for purchase:\n");

        for (var i = 0; i < res.length; i++) {
            console.log(" | " + res[i].item_id + " " + res[i].product_name + " === " + "$" + res[i].price + "   amount Available: " + res[i].stock_quantity + " |" + "\r\n");
        };

        ask();
    });

};



function ask() {
    connection.query("SELECT * FROM products", function(err, res) {
        //prompt to ask how much is the purchase going to be 
        inquirer
            .prompt({
                name: "choice",
                type: "rawlist",
                choices: function(value) {
                    var choiceArray = [];
                    for (var i = 0; i < res.length; i++) {
                        choiceArray.push(res[i].product_name);
                    }
                    return choiceArray;
                },
                message: "How many are you going to buy\n",
            })
            .then(function(answer) {
                for (var i = 0; i < res.length; i++) {

                    if (res[i].product_name == answer.choice) {
                        var chosenItem = res[i];
                        //NEED TO ASK HOW MUCH YOU WANT TO BUY
                        inquirer.prompt({
                                name: "numPurchase",
                                type: "input",
                                message: "How many units would you like to purchase?",

                            })
                            .then(function(answer) {

                                if (chosenItem.stock_quantity >= answer.numPurchase) {
                                    var query = connection.query(
                                        "UPDATE products SET ? WHERE ?", [{
                                                stock_quantity: (parseFloat(chosenItem.stock_quantity - answer.numPurchase))
                                            },
                                            {
                                                product_name: chosenItem.product_name
                                            }
                                        ],
                                        function(err) {

                                            if (err) throw err;

                                            console.log("The total is $ " + (answer.numPurchase * chosenItem.price) + ".\n");
                                            ask();
                                        }
                                    );

                                } else {

                                    ask();
                                }
                            });

                    };

                }

            });
    });

};