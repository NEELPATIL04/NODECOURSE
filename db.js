const mongoose=require('mongoose');
require('dotenv').config();
//const mongoURL ='mongodb://127.0.0.1:27017/hotels'
const mongoURL=process.env.DB_URL
mongoose.connect(mongoURL);
const db=mongoose.connection;
db.on('connected',()=>{
    console.log('connected to mongoDB');
    });
db.on('error',(err) =>{
    console.log('Error connecting to mongoDB',err);
});
db.on('disconnected',()=>{
    console.log('Disconnected from mongoDB');
});

module.exports=db;
