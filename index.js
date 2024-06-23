const server = require('ws').Server;
const s = new server({port:5001});
s.on('connection',function(ws){
    ws.on('message',(message)=>{
        console.log("Received:"+message);
        if(message=="hello!"){
            ws.send("hey there from server");
        }
    })
})