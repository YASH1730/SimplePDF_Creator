// importing all the required pakages

const express = require("express");
const app = express();
const port = process.env.PORT || 80;

//setting up the view engine 

app.set('view engine',"pug");
app.set('views','view');

//setting up the static folder

app.use('public',express.static("./public"));
app.use(express.urlencoded());

//router
app.use(require('./server/router/router'))



// listen the server at potr 80
app.listen(port,()=>{
    console.log("Server is running at post 80");
})