var express = require("express"); 
var http = require("http"); 

var port = process.argv[2]; 
var app = express(); 
var messages = require("./public/javascripts/messages");

app.get("/",function(req,res){
    res.sendFile("splash.html", {root: "./public"})});

app.use(express.static(__dirname + "/public")); 


http.createServer(app).listen(port);

const wss = new websocket.Server({ server });

wss.on("connection", function(ws) {


    //let's slow down the server response time a bit to make the change visible on the client side
    setTimeout(function() {
        console.log("Connection state: "+ ws.readyState);
        ws.send("Thanks for the message. --Your server.");
        ws.close();
        console.log("Connection state: "+ ws.readyState);
    }, 2000);
    
    ws.on("message", function incoming(message) {
        console.log("[LOG] " + message);
    });
});

server.listen(port);
