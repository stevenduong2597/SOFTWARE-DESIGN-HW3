const express = require('express');
const app = express();

let gallons = "";
let address = "";
let date = "";
let suggested = "";
let total = "";

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use('/css', express.static(__dirname + 'public/css'));

app.set('view-engine', 'ejs');

app.get("/", (req, res) => {

    res.render("index.ejs");

} );

app.get("/dashboard", (req, res) => {

    res.render("dashboard.ejs");

} );

app.get("/history", (req, res) => {

    res.render("history.ejs");

} );

app.get("/register", (req, res) => {

    res.render("register.ejs");

} );

app.get("/login", (req, res) => {

    res.render("login.ejs");

} );


app.post("/dashboard", (req, res) => {

    gallons = req.body.gallons;
    address = req.body.address;
    date = req.body.date;
    suggested = "$300";
    total = "$" + parseInt(suggested.substr(1) * gallons);

});



app.get("/info", (req, res) => {

    res.status(200).json({
        
        gallons: gallons,
        address: address,
        date: date,
        suggested: suggested,
        total: total

    });

} );



app.listen(3000);






