const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Hotel');
const Schema = mongoose.Schema;

var NewRoomSchema = new Schema({
    roomId : Number,
    roomName : String,
    description : String,
    price : Number,
    imageUrl : String
});

var Roomdata = mongoose.model('room', NewRoomSchema);  //UserData is the model and NewBookData is the schema

module.exports = Roomdata;