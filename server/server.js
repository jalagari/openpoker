const express = require("express");
const app = express();
const port = process.env.PORT || 8080

const routes = require("./api/routes");

app.use(express.json());      
app.use(express.urlencoded({ extended: true })); 

routes(app);
app.listen(port, function(){
	console.log("Application Start on port " + port);
})