const mongoose= require('mongoose');
const personSchema =new mongoose.Schema({
    name :{
         type:String,
         required :true
    },
    age :{
      type :Number  
    },
    work:{
        type:String,
        enum : ['chef','waiter','manager'],
        required:true
    },
    mobile :{
        type : String,
        required :true 
    },
    email :{
        type :String,
        required: true ,
        unique : true 
    },
    salary : {
        type :Number ,
        required :true
    }
})
 //create models 
 const Person=mongoose.model('Person',personSchema);
 //const Person = mongoose.model('Person', personSchema, 'my_custom_collection_name');
 module.exports =Person;