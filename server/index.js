const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const fileupload = require("express-fileupload")


const app = express();

app.use(bodyParser.urlencoded({extended: true,}));
app.use(cors());
app.use(bodyParser.json());
app.use(fileupload())
app.use('/uploads', express.static(__dirname + "/uploads"))

// Connect to the database
const connection = mysql.createConnection({
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
  const user = "keti";
  const pass = "1994";

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
  console.log("in men")

  const formData = req.files
  
  const item = {
    description: req.body.description,
    category: req.body.category,
    img: req.files.img.name,
    img1: req.files.img1.name,
    img2: req.files.img2.name,    
  }
  
  const upload = __dirname + '/uploads/' + formData.img.name
  const upload1= __dirname + '/uploads/' + formData.img1.name
  const upload2 = __dirname + '/uploads/' + formData.img2.name
  
  formData.img.mv(upload, (err) => {return res.status(500).send(err)})
  formData.img1.mv(upload1, (err) => {return res.status(500).send(err)})
  formData.img2.mv(upload2, (err) => {return res.status(500).send(err)})
  
  console.log("here")
  const query = connection.query("INSERT INTO men SET ?", item,
    (err, result) => {
      if (err) throw err;
    })
});


//adds item to women
app.post("/createwomen", (req, res) => {
  const formData = req.files

  const item = {
    description: req.body.description,
    category: req.body.category,
    img: req.files.img.name,
    img1: req.files.img1.name,
    img2: req.files.img2.name,    
  }
  
  const upload = __dirname + '/uploads/' + formData.img.name
  const upload1= __dirname + '/uploads/' + formData.img1.name
  const upload2 = __dirname + '/uploads/' + formData.img2.name
  
  formData.img.mv(upload, (err) => {return res.status(500).send(err)})
  formData.img1.mv(upload1, (err) => {return res.status(500).send(err)})
  formData.img2.mv(upload2, (err) => {return res.status(500).send(err)})

  const query = connection.query("INSERT INTO women SET ?", item,
    (err, result) => {
      if (err) throw err;
    })

});

app.post("/createkids", (req, res) => {
  const formData = req.files

  const item = {
    description: req.body.description,
    category: req.body.category,
    img: req.files.img.name,
    img1: req.files.img1.name,
    img2: req.files.img2.name,    
  }
  
  const upload = __dirname + '/uploads/' + formData.img.name
  const upload1= __dirname + '/uploads/' + formData.img1.name
  const upload2 = __dirname + '/uploads/' + formData.img2.name
  
  formData.img.mv(upload, (err) => {console.log(err)})
  formData.img1.mv(upload1, (err) => {console.log(err)})
  formData.img2.mv(upload2, (err) => {console.log(err)})

  const query = connection.query("INSERT INTO kids SET ?", item,
    (err, result) => {
      if (err) throw err;
      res.status.send('Appended')
    })

});


//adds item to others
app.post("/createmsc", (req, res) => {
  const formData = req.files

  const item = {
    description: req.body.description,
    category: req.body.category,
    img: req.files.img.name,
    img1: req.files.img1.name,
    img2: req.files.img2.name,    
  }

  const upload = __dirname + '/uploads/' + formData.img.name
  const upload1= __dirname + '/uploads/' + formData.img1.name
  const upload2 = __dirname + '/uploads/' + formData.img2.name
  
  formData.img.mv(upload, (err) => {return res.status(500).send(err)})
  formData.img1.mv(upload1, (err) => {return res.status(500).send(err)})
  formData.img2.mv(upload2, (err) => {return res.status(500).send(err)})

  const query = connection.query("INSERT INTO miscellaneous SET ?", item,
    (err, result) => {
      if (err) throw err;
    })
});


//GET REQUEST STARTS HERE

//fetch item from men table
app.get('/getmen', (req, res) => {
  const query = connection.query("SELECT * FROM men", (err, result) => {
    if(err) throw err;
    res.json(result)
    console.log('MEN data:', result)
  })
  // res.send("Data retrieved")
})

app.get('/getwomen', (req, res) => {
  const query = connection.query("SELECT * FROM women", (err, result) => {
    if(err) throw err;
    res.json(result)
    console.log('WOMEN data:', result)
  })
  // res.send("Data retrieved")
})


app.get('/getkids', (req, res) => {
  const query = connection.query("SELECT * FROM kids", (err, result) => {
    if(err) throw err;
    res.json(result)
    console.log('KIDS data:', result)
  })
  // res.send("Data retrieved")
})

app.get('/getmiscellaneous', (req, res) => {
  const query = connection.query("SELECT * FROM miscellaneous", (err, result) => {
    if(err) throw err;
    res.json(result)
    console.log('KIDS data:', result)
  })
  // res.send("Data retrieved")
})

//listens on port
app.listen(8080, function () {
  console.log("app listening on port 8080!");
});
