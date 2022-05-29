const express = require("express")
const app = express()

app.use(express.static('assets'))
app.use(express.static('node_modules'))

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/Login.html")
});

app.get('/Login', function(req, res) {
    res.sendFile(__dirname + "/Login.html")
})
app.get('/Home', function(req, res) {
    res.sendFile(__dirname + "/Home.html")
})

app.get('/AddUsers', function(req, res) {
    res.sendFile(__dirname + "/assets/Add/user.html")
})
app.get('/AddInts', function(req, res) {
    res.sendFile(__dirname + "/assets/Add/int.html")
})
app.get('/AddClients', function(req, res) {
    res.sendFile(__dirname + "/assets/Add/client.html")
})
app.get('/ListUsers', function(req, res) {
    res.sendFile(__dirname + "/assets/List/user.html")
})
app.get('/ListInts', function(req, res) {
    res.sendFile(__dirname + "/assets/List/int.html")
})
app.get('/ListClients', function(req, res) {
    res.sendFile(__dirname + "/assets/List/client.html")
})
app.get('/EditClients', function(req, res) {
    res.sendFile(__dirname + "/assets/Edit/client.html")
})
app.get('/EditInts', function(req, res) {
    res.sendFile(__dirname + "/assets/Edit/int.html")
})
app.get('/EditUsers', function(req, res) {
    res.sendFile(__dirname + "/assets/Edit/user.html")
})

app.listen(3100)
console.log("Express esta corriendo en el puerto: 3100");
console.log("http://localhost:3100")