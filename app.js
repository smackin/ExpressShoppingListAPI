const express = require('express');
const ExpressError = require("./expressError")
const items = require("./fakeDb")

const app = express();

app.use(express.json());

app.get('/items', function(req,res) {
// render a list of shopping items as an array of objects [{“name”: “popsicle”, “price”: 1.45}, {“name”:”cheerios”, “price”: 3.40}]
    return res.send("/items route!")
    // res.json({items})
})

app.post ('/items' , function (req, res, next) {
// accept JSON data and push it to the shopping list. 

})

app.get ('/items/:name', function(req,res){
// display a single item's name and price 

    return res.send()
})


app.patch('/items/:name', function (req, res) { 
//modify a single items name and/or price 

})




app.delete('/items/:name', function (req, res) {
//delete item from a array based on :name

})





app.listen(3000, function () {
    console.log('App on port 3000');
})