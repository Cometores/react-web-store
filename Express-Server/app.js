const express = require("express");
const fs = require('fs');
const cors = require('cors');

var app = express();
app.use(express.json());
app.use(cors());


app.put('/registration', (req, res) => {
    var newReg = req.body;
    var logins = JSON.parse(fs.readFileSync('./loginData/logins.json', 'utf8'));

    // Length check 
    if (newReg.username.length < 5 && newReg.password.length < 3) {
        res.status(501)
        res.send({"success": "false", "errorMsg": "Username and password are too short!"});
        return;
    } else if(newReg.username.length < 5) {
        res.status(502)
        res.send({"success": "false", "errorMsg": "Too short username!"});
        return;
    } else if(newReg.password.length < 3) {
        res.status(503)
        res.send({"success": "false", "errorMsg": "Too short password!"});
        return;
    }

    // Existing user check
    for (user in logins.logins) {
        if (newReg.username == logins.logins[user].username) {
            res.status(504)
            res.send({"success": "false", "errorMsg": "User already exists"});
            return;
        }
    }

    logins.logins.push(newReg);
    logins = JSON.stringify(logins);

    fs.writeFileSync('./loginData/logins.json', logins);
    res.status(201);
});


app.put('/login', (req, res) => {
    var userLogin = req.body;
    var logins = JSON.parse(fs.readFileSync('./loginData/logins.json', 'utf8'));

    // Length check
    if (userLogin.password.length == 0 || userLogin.username.length == 0) {
        res.status(505)
            res.send({"success": "false", "errorMsg": "input invalid"});
            return;
    }

    // Login as user
    for (user in logins.logins) {
        if (userLogin.username == logins.logins[user].username &&
            userLogin.password == logins.logins[user].password) {
            
        }
    }

    // Login as admin
    if (userLogin.username == "admin" && userLogin.password == "password") {

    }
});


// Article
app.get('/', (req, res) => {
    var articles = JSON.parse(fs.readFileSync('./article/article.json', 'utf8'));
    res.status(200);
});


app.listen(8080, () => {
    console.log("Server running on port 8080");
});