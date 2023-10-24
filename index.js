const express=require('express')
const jwt=require('jsonwebtoken');
const app=express();
app.use(express.json());

const user= [{
    "name":"Ali Veli",
    "phone":"038838380",
    "email":"ali@gmail.com",
    "password":"P@ssw0rd"
}]

app.post('/login', function(req,res){
const body=req.body;
const email=body.email;
const password= body.password;

const findUser = user.find(k => k.email ===email && k.password ===password)
console.log(findUser)
if(findUser){
    findUser.password ='***';
    var token=jwt.sign({
        exp:Math.floor(Date.now() /1000) 
        // (60*60)
        // +Number(req.params.time),
        +180,
        data: findUser
     }, 'secret'); 
     res.send(token); 
}else{
    res.send("gecersiz kullanıcı");
}

})

app.post('/decode', function(req,res){
   const token =req.headers.authorization.replace('Bearer ','')
    // console.log(req.headers.authorization)
    // res.send(req.headers.authorization);
   const usr = jwt.verify(token, 'secret')
    res.send(usr);
})
app.post('/me', function(req,res){
    const token =req.headers.authorization.replace('Bearer ','')
     // console.log(req.headers.authorization)
     // res.send(req.headers.authorization);
    const usr = jwt.verify(token, 'secret')
     res.send(usr.data);
 })

app.listen(3030)