var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

var users = [
  {
    name: "John Doe",
    email: "johndoe@gmail.com",
    phone: "123-45-678",
  },
];

app.post("/addemp", (req, res) => {
  var newUser = {
    id: req.body.id,
    name: req.body.newEmpName,
    email: req.body.newEmpEmail,
    phone: req.body.newEmpPhone,
  };
  users.push(newUser);
  res.redirect("/");
});

app.post("delete/:userId", (req, res) => {
  var userId = req.params.userId;
  users.splice(users.indexOf(userId), 1);
  res.redirect("/");
});

app.get("/", (req, res) => {
  res.render("index", { users: users });
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
