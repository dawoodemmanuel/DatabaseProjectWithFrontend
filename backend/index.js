const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
// app.use(
//   session({
//     key: "userId",
//     secret: "subscribe",
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       expires: 60 * 60 * 24,
//     },
//   })
// );
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "D@wood1998",
  database: "Shopping",
});

app.post("/signup", (req, res) => {

  const username = req.body.username
  const email = req.body.email
  const phone = req.body.phone
  const address = req.body.address
  const password = req.body.password

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }
    db.query(
      "SELECT * FROM Customer WHERE CustEmail = (?)", [email],
      (err, result) => {
        if (result.length > 0) {
          res.send(false)
          console.log(result)
          console.log("This Email is Already Exists, Try Again")
        } else {
          db.query(
            "INSERT INTO Customer (CustName, CustEmail, CustAddress, CustPassword, Phone) VALUES (?, ?, ?, ?, ?)",
            [username, email, address, hash, phone],
            (err, result) => {
              if (err) {
                console.log(err)
              } else {
                res.send(true)
                console.log("Data is Added Successfully")
              }

            }
          );
        }
      }
    );

  });
});

app.post("/login", (req, res) => {
  const email = req.body.email
  const password = req.body.password

  db.query(
    "SELECT * FROM Customer WHERE CustEmail = ?",
    email,
    (err, result) => {
      if (err) {
        res.send(err);
      }

      if (result.length > 0) {
        bcrypt.compare(password, result[0].CustPassword, (error, response) => {
          if (response) {
            //req.session.user = result;
            //console.log(req.session.user);
            res.send("Login Successfull");
          } else {
            res.send("Wrong email/password combination!");
            console.log(result);
          }
        });
      } else {
        res.send("Email doesn't exist");
      }
    }
  );

})





app.listen(3001, () => {
  console.log("Server is running up!!!")
})