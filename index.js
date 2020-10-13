/*var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({"extended":false}));


app.use(express.static('public'));
 

app.get("/",function(req,res){
   res.redirect("Login.html");
 });

app.post('/authenticator', function (req , res) {
 var Name = req.body.name;
 var Password = req.body.pass;
 console.log("Name is " + Name);
 console.log("Pass is " + Password);
 if(Name === "tom" && Password === "cat"){
     res.redirect("index.html");
 }
 else{
    res.redirect("/Login.html");
 }
});

app.listen(8089, function () {
  console.log('ExpressJS is running on port 8089');
});*/
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));


var cookieParser = require('cookie-parser');
app.use(cookieParser());

var session = require('express-session');
app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: true,
}));

app.use(express.static('public'));


app.get("/Login", function (req, res) {
   if (req.session.try === undefined) {
       req.session.try = 0;
   }
   if (req.session.try === 3) res.redirect("Failure");
   else res.redirect("/Login.html");
});

app.get("/Logout", function (req, res) {
   req.session.destroy();
   return res.redirect("/Login.html");
});

app.post('/authenticator', function (req, res) {
   if(req.session.try === undefined) res.redirect("/Login");
   else if (req.session.try < 3) {
       var Name = req.body.name;
       var Password = req.body.pass;
       console.log("Name is " + Name);
       console.log("Pass is " + Password);
       if (Name === "Hari" && Password === "3690") {
           req.session.isAuthenticated = true;
           res.redirect("index.html");
       }
       else {
          req.session.try++;
          res.redirect("/Login");

       }
   }
   else res.redirect("/Failure");
});

app.get('/Failure', function (req, res) {
   res.redirect("/Failure.html");
});


app.listen(8089, function () {
   console.log('ExpressJS is running on port 8089');
});