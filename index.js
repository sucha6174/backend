//code1
// // import http from 'http';
// const http =  require("http")
// const server = http.createServer((req, res) => {
   

//     res.writeHead(200, { "content-type": "text/plain" });
//     res.end("Hello from backend")
// });

// server.listen(4002, () => {
//     console.log(`server running at port ${4002}`);
// });


// import http from 'http';
// const http =  require("http")
// const server = http.createServer((req, res) => {
//     console.log(req.method);
// if(req.url == "/users" ){
//     res.writeHead(200, { "content-type": "application/json" });
//     res.end(JSON.stringify({name:"thub"}))
// }
// else{
//     res.writeHead(200, { "content-type": "text/plain" });
//     res.end("Hi from backend")
// }
// });

// server.listen(4004, () => {
//     console.log(`server running at port ${4004}`);
// });


//code3-express
// const express = require("express")
// const app = express();
// app.get('/users',(req, res) => {
//     res.send("hello this is from backend");
// })
// app.get('/get-users',(req, res) => {
//     res.send("hello this is from backend");
// })
// app.listen(7011, () => {
//     console.log("server running at port 7011")
// });

// import http from 'http';
// const server=http.createServer((req,res)=>{
//     console.log(req.method);
//     if(req.url=="/users"){
//         res.writeHead(200,{"content-type":"application/json"});
//         res.end(JSON.stringify({name:"thub"}))
//     }
//     else{
//         res.writeHead(200,{"content-Type":"text/plain"});
//         res.end("hello this is from backened")
//     }
// });
// server.listen(7007,()=>{
//     console.log(server running at port $(7007))
// });
const express = require("express")

const app=express();
app.use(express.json());
app.get('/get-user',(req,res)=>{
    res.send("api sender")
})
app.post('/add-user',(req,res)=>{
    let data=req.body;
    console.log(data);
    
    // console.log("posting data")
    res.send("data added");
})
app.put('/put-user',(req,res)=>{
    let data=req.body
console.log("putting data",data)
res.send({
    message:"user updated",
    updatedData:data
});
});
app.listen(7005,()=>{
    console.log("listening")
})