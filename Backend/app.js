const express = require('express');
const cors = require('cors');
const db = require('./data');

// Creating the app and enabling cors
const app = express();
app.use(cors());



// Creating sessions object as global variable.

// app.get('/', function(req ,res){
//     res.status(200).send('salamulaikum')
// })

// Middleware for creating new session
app.post('/init', function (req, res, next) {
    return db.init()
        .then(function () {
            return res.sendStatus(200);
        })
        .catch(next);
});


app.post('/index', function (req, res, next) {

    const username = req.query.username;
    console.log('yourname is: ' + username)

    res.json({ user_name: username })

    db.Adduser(username)
        .then(function () {
            return res.json({ user_name: username })
        })
        .catch(next);
});


app.get('/username', function (req, res, next) {


    db.GETusers()
        .then(function (result) {

            console.log(result.rows)

            return res.status(200).send(result.rows);
        })
        .catch(next);

});


const port = process.env.PORT || 8000

// Start listening to port 8000
app.listen(port, function () {
    console.log('Listening to port ' + port);
});
