//call and init express
const express = require("express");
const app = express();

//set paths
app.use("/static", express.static(__dirname + 'dist'));
app.use("/static", express.static(__dirname + '/node_modules'));

//start server and send as response index.html
app.use('/',express.static("dist"));
app.listen(process.env.PORT || 1506);
console.log("runing at port 1506"); 

