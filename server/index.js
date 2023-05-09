var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var cors = require("cors");

var app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());
app.use(bodyParser.json());

// Connect to the database
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "miracle",
});

connection.connect();

//sends all the inventory

//recives all sql data about the senspr and user from database
app.get("/get_data", (req, res, next) => {
  connection.query("SELECT * FROM user", function (err, result, fields) {
    if (err) throw err;
    console.log("table Data: ", result);
    res.json(result);
  });
  console.log("Data retrieved successfully");
});


//login authentication
app.post("/login", (req, response, next) => {
  const username = req.body.username;
  const password = req.body.password;

  const query = connection.query(
    `SELECT * FROM user WHERE username="${username}"`,
    function (err, result) {
      if (err) throw err;

      if (result.length > 0) {
        for (let count = 0; count < result.length; count++) {
          if (result[count].password == password) {
            response.send("true");
          } else {
            response.send("Incorrect Password");
          }
        }
      } else {
        response.send("Invalid username");
      }
      response.end();
    }
  );
});

// creating an account
app.get("/createaccount", (req, res, next) => {
  const user = "ketiyohannes";
  const pass = "12345";

  let post = {
    username: user,
    password: pass,
  };
  const query = connection.query(
    "INSERT INTO user SET ?",
    post,
    function (error, results, fields) {
      if (error) throw error;
    }
  );
  console.log(query.sql);
  res.send("Data saved successfully");
});


//adds item to men
app.post("/createmen", (req, res) => {
  const description = req.body.description;
  const category = req.body.category;

  const item = { description: description, category: category };
  console.log(item)

  const query = connection.query("INSERT INTO men SET ?", item,
    (err, result) => {
      if (err) throw err;
    })
    res.send("Data saved successfully to men section successfully");
});


//adds item to women
app.post("/createwomen", (req, res) => {
  const description = req.body.description;
  const category = req.body.category;

  const item = { description: description, category: category };
  console.log(item)

  const query = connection.query("INSERT INTO women SET ?", item,
    (err, result) => {
      if (err) throw err;
    })
    res.send("Data saved successfully to women section successfully");
});


//adds item to kids
app.post("/createkids", (req, res) => {
  const description = req.body.description;
  const category = req.body.category;

  const item = { description: description, category: category };
  console.log(item)

  const query = connection.query("INSERT INTO kids SET ?", item,
    (err, result) => {
      if (err) throw err;
    })
    res.send("Data saved successfully to kids section successfully");
});

//adds item to others
app.post("/createmiscellaneous", (req, res) => {
  const description = req.body.description;
  const category = req.body.category;

  const item = { description: description, category: category };
  console.log(item)

  const query = connection.query("INSERT INTO miscellaneous SET ?", item,
    (err, result) => {
      if (err) throw err;
    })
    res.send("Data saved successfully to msc section successfully");
});


//fetch item from men table
app.get('/getmen', (req, res) => {
  const query = connection.query("SELECT * FROM men", (err, result) => {
    if(err) throw err;
    res.json(result)
    console.log('MEN data:', result)
  })
  // res.send("Data retrieved")
})

//listens on port
app.listen(8080, function () {
  console.log("app listening on port 8080!");
});
