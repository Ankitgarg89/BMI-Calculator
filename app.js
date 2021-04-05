
const express = require("express");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.render("bmiCalculator", {result_bmi: 0});
});

app.post("/", function(req, res){
    
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var BMI = weight/(height*height);

    res.render("bmiCalculator", {result_bmi: BMI});
});

app.listen(3000, function(){
    console.log("server running on port 3000");
});
