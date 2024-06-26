const notes=require('./notes.js');
var _ = require('lodash')
var age= notes.age;
console.log(age);
var result= notes.addnumber(age ,18);
console.log(result);
var data =["person","person",1 ,2 ,1 , 2,'name','age','2'];
var filter = _.uniq(data);
console.log(filter);
console.log(_.isString(true));