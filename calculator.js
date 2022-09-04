
const express = require ("express");
const bodyParser = require ("body-parser");


 const app = express();
 app.use(bodyParser.urlencoded({extended:true}));
 // the above line is used to fetch the data form the form to our local page..




 app.get("/",function(request,response){
    response.sendFile(__dirname+"/index.html");   //__dirname which is used to locate the file where the computer is in ... + "/index.html"
 })
 
 app.post("/",function(request,response){
    var number1 = request.body.num1; 
    var number2 = request.body.num2;
    var result = number1+number2;
  response.send("The addition of two numbers " + result);
 })  

 app.listen(3007,function(){
    console.log("The server is in active stage");
 })
 