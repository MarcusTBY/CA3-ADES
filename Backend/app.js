const express = require('express');
const cors = require('cors');


// Creating the app and enabling cors
const app = express();
app.use(cors());



// Creating sessions object as global variable.

app.get('/', function(req ,res){
    res.status(200).send('salamulaikum')
})

// Middleware for creating new session
// app.post('/index', function (req, res) {

//     const username = req.query.username;
//     console.log('yourname is: ' + username)

//    res.json({user_name: username})
// });

// app.get('/', function (req, res){
//     console.log('sad');
// });

// Start listening to port 8000
app.listen(8000, function () {
    console.log('Listening to 8000');
});