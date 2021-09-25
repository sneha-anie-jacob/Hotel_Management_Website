const express = require('express');
const RoomData = require('./src/models/Roomdata');
const cors = require('cors');
var bodyparser=require('body-parser');
const jwt = require('jsonwebtoken')
var app = new express();
app.use(cors());
app.use(express.json());
username='admin';
password='123456';


function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }

app.post('/insert',verifyToken,function(req,res){
   
    console.log(req.body);
   
    var room = {       
        roomId : req.body.room.roomId,
        roomName : req.body.room.roomName,
        description : req.body.room.description,
        price : req.body.room.price,
        imageUrl : req.body.room.imageUrl,
   }       
   var room = new RoomData(room);
   room.save();
});
app.get('/rooms',function(req,res){
    
    RoomData.find()
                .then(function(rooms){
                    res.send(rooms);
                });
});
app.get('/:id',  (req, res) => {
  
  const id = req.params.id;
    RoomData.findOne({"_id":id})
    .then((room)=>{
        res.send(room);
    });
})


// No Change from now


app.post('/login', (req, res) => {
    let userData = req.body
    
      
        if (!username) {
          res.status(401).send('Invalid Username')
        } else 
        if ( password !== userData.password) {
          res.status(401).send('Invalid Password')
        } else {
          let payload = {subject: username+password}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})
        }
      
    })

    app.put('/update',(req,res)=>{
      console.log(req.body)
      id=req.body._id,
      roomId= req.body.roomId,
      roomName = req.body.roomName,
      description = req.body.description,
      price = req.body.price,
      imageUrl = req.body.imageUrl
     RoomData.findByIdAndUpdate({"_id":id},
                                  {$set:{"roomId":roomId,
                                  "roomName":roomName,
                                  "description":description,
                                  "price":price,
                                  "imageUrl":imageUrl}})
     .then(function(){
         res.send();
     })
   })
   
app.delete('/remove/:id',(req,res)=>{
   
     id = req.params.id;
     RoomData.findByIdAndDelete({"_id":id})
     .then(()=>{
         console.log('success')
         res.send();
     })
   })
     

app.listen(3000, function(){
    console.log('listening to port 3000');
});

const UserRouter = require('./src/routes/UserRouter');
app.use('/users', UserRouter);