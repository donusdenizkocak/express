


// const express=require('express')
// const jwt=require('jsonwebtoken');
// const app=express();
// app.use(express.json());

// app.get('/token/:time/:id', function(req,res){
//     var token=jwt.sign({
//         exp:Math.floor(Date.now() /1000) 
//         // (60*60)
//         +Number(req.params.time),
//         data: req.params.id 
//      }, 'secret');   

//     res.send(token);
// })

// app.post('/decode', function(req,res){
   
//     console.log(req.headers.authorization)
//     res.send(req.headers.authorization);
// })

// app.listen(3030)