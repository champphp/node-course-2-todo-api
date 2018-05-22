const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '57b03dca46ea28c2904aa087c';

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// Todo.find({
//     _id : id
// }).then((todos)=>{
//     console.log('Todos ',todos);
// });

// Todo.findOne({
//     _id : id
// }).then((todo)=>{
//     console.log('Todo ',todo);
// });

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log('Id not found.');
//     }
//     console.log('Todo by id ',todo);
// }).catch((e)=>console.log(e));

var iduser = '5b02846d1b527f2103500cb9';

User.findById(iduser).then((user)=>{
    if(!user){
        return console.log('Id not found.');
    }
    console.log(JSON.stringify(user,undefined,2));
}).catch((e)=>console.log(e));
