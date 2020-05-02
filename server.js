const express = require('express')
const app = express()
const path = require('path')
const request = require('request');
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

let port = 8080

app.get('/recipes/:ingredient', function(req, res){
    let ingredient = req.params.ingredient
    request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function(error, response, body){
        console.log(body)
        res.send(body)
    })
})
app.get('/sanity', function(req, res){
    res.send("server works, req accepted!")
})
app.listen(port, function(){
    console.log("server is lisenting on port" + " " +port)
})