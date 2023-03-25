//frontend
const bodyParser = require("body-parser");
const express = require("express");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.get("/setting", (req, res)=>{
    res.sendFile(__dirname + "/setting.html");
});

app.post("/profile", (req,res)=>{
    fullname = req.body.fullName;
    email = req.body.eMail;
    res.sendFile(__dirname + "/success.html");
});

app.post("/account", (req,res)=>{
    username = req.body.userName;
    add1 = req.body.address1;
    add2 = req.body.address2;
    city = req.body.city;
    state = req.body.state;
    zip = req.body.zipcode;
    res.sendFile(__dirname + "/success.html");
});

app.post("/security", (req,res)=>{
    old = req.body.oldPassword;
    newPass = req.body.newPassword;
    verify = req.body.verification;
    res.sendFile(__dirname + "/success.html");
});

app.post("/billing", (req,res)=>{
    card = req.body.cardNumber;
    exp = req.body.expirationDay;
    cvv = req.body.cvv;
    res.sendFile(__dirname + "/success.html");
});




app.listen(3000, () => {console.log("Server's running on port 3000")});
