//import http module
//http module used to create the http server
import http from "http";

//inmport websocket module
//websocket module used to creat the chat server
const server= require("websocket").server;


//assign port no to chat server
let socket = new server({
    httpServer: http.createServer().listen(8080,()=>{
        console.log("server listening the port number 8080")
    })
});

socket.on("request",function(request)){
    let connection = request.accept(null,request.origin);
    connection.on("message" )
}
